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
        return $this->BelongsToMany(Scholar::class);
    }

    public function tags()
    {
        return $this->BelongsToMany(Tag::class);
    }

    public function photo()
    {
        return $this->morphOne(Photo::class, 'photoable');
    }
}
