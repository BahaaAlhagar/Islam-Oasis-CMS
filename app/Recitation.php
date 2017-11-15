<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Recitation extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'name', 'slug'];

    protected $guarded = ['id'];


    public function qurans()
    {
        return $this->hasMany(Quran::class);
    }
}
