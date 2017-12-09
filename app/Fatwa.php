<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Fatwa extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'question', 'slug', 'answer'];

    protected $guarded = ['id'];

    public function scholar()
    {
        return $this->BelongsTo(Scholar::class);
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
