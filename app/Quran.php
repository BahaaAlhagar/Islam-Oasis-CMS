<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Quran extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'name'];

    protected $guarded = ['id'];

    public function scholar()
    {
        return $this->BelongsTo(Scholar::class);
    }

    public function publishedScholar()
    {
        return $this->BelongsTo(Scholar::class)
                    ->translatedIn(app()->getLocale())
                    ->published();
    }

    public function recitation()
    {
    	return $this->BelongsTo(Recitation::class);
    }

    public function link()
    {
        return $this->morphOne(Link::class, 'linkable');
    }
}