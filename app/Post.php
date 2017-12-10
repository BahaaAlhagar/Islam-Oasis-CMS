<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use \Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];


    // dimsav translateble options
    use Translatable;

    public $translatedAttributes = ['locale', 'title', 'slug', 'content', 'published'];



    protected $guarded = ['id', 'user_id'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
    
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function photo()
    {
        return $this->morphOne(Photo::class, 'photoable');
    }

    public function scopePublished($query)
    {
        return $query->whereHas('translations', function($query){
            $query->whereLocale(app()->getLocale())->where('published', 1);
        });
    }

    public function scopeFilter($query, $filters)
    {
        
        if ($month = $filters['month'])
        {
            $query->whereMonth('created_at', Carbon::parse($month)->month);
        }

        if ($year = $filters['year'])
        {
            $query->whereYear('created_at', $year);
        }

    }

    public function relatedPostsByTag()
    {
        $relatedPosts = Cache::remember('related_posts_' .$this->id. '_' .app()->getLocale(), 15, function (){
                return Post::translatedIn(app()->getLocale())
                        ->whereType($this->type)
                        ->published()
                        ->whereHas('tags', function ($query){
                            $query->whereIn('id', $this->tags()->pluck('id')->toArray());
                        })->where('id', '<>', $this->id)
                        ->take(10)->inRandomOrder()->get();
            });

        return $relatedPosts;
    }

    public function scopeWithCurrentLocale($query)
    {
        return $query->with(['translations' => function($query){
                $query->whereLocale(app()->getLocale());
            }]);
    }
}
