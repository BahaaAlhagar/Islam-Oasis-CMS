<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;
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
}
