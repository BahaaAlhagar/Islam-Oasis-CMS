<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Series extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'name', 'slug', 'published', 'description'];

    protected $guarded = ['id'];

    public function scholars()
    {
        return $this->morphToMany(Scholar::class, 'scholarable');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function photo()
    {
        return $this->morphOne(Photo::class, 'photoable');
    }

    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function scopePublished($query)
    {
        return $query->whereHas('translations', function($query){
            $query->whereLocale(app()->getLocale())->where('published', 1);
        });
    }

    public function scopeWithCurrentLocale($query)
    {
        return $query->with(['translations' => function($query){
                $query->whereLocale(app()->getLocale());
            }]);
    }
}
