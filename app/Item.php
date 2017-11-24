<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Item extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'name', 'slug', 'language', 'description'];

    protected $guarded = ['id'];

    public function scholars()
    {
        return $this->BelongsToMany(Scholar::class);
    }

    public function tags()
    {
        return $this->BelongsToMany(Tag::class);
    }

    public function series()
    {
        return $this->BelongsTo(Series::class);
    }

    public function photo()
    {
        return $this->morphOne(Photo::class, 'photoable');
    }

    public function links()
    {
        return $this->morphMany(Link::class, 'linkable');
    }
}
