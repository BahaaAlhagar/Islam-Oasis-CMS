<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Scholar extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'name', 'slug', 'biography', 'published'];

    protected $guarded = ['id'];

    public function photo()
    {
        return $this->morphOne(Photo::class, 'photoable');
    }

    public function qurans()
    {
    	return $this->hasMany(Quran::class);
    }

    public function series()
    {
        return $this->belongsToMany(Series::class);
    }
}
