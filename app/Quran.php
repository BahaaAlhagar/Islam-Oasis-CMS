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

    public function recitation()
    {
    	return $this->BelongsTo(Recitation::class);
    }

    public function link()
    {
        return $this->morphOne(Link::class, 'linkable');
    }

    public function scopeWithCurrentLocale($query)
    {
        return $query->with(['translations' => function($query){
                $query->whereLocale(app()->getLocale());
            }]);
    }
}