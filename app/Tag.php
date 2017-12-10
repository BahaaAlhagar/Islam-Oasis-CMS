<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Tag extends Model
{

    use Translatable;

    public $translatedAttributes = ['locale', 'name', 'slug'];

    protected $guarded = ['id'];

    public function posts()
    {
    	return $this->morphedByMany(Post::class, 'taggable');
    }

    public function series()
    {
    	return $this->morphedByMany(Series::class, 'taggable');
    }

    public function items()
    {
        return $this->morphedByMany(Item::class, 'taggable');
    }

    public function news()
    {
        return $this->morphedByMany(Post::class, 'taggable')->whereType(1)->published();
    }

    public function lessons()
    {
        return $this->morphedByMany(Post::class, 'taggable')->whereType(2)->published();
    }

    public function stories()
    {
        return $this->morphedByMany(Post::class, 'taggable')->whereType(3)->published();
    }

    public function fatawa()
    {
        return $this->morphedByMany(Fatwa::class, 'taggable')->whereType(1)->translatedIn(app()->getLocale());
    }

    public function FAQ()
    {
        return $this->morphedByMany(Fatwa::class, 'taggable')->whereType(2)->translatedIn(app()->getLocale());
    }

    public function scopeWithCurrentLocale($query)
    {
        return $query->with(['translations' => function($query){
                $query->whereLocale(app()->getLocale());
            }]);
    }
}
