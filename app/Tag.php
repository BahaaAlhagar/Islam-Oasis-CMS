<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Tag extends Model
{

    use Translatable;

    public $translatedAttributes = ['locale', 'name', 'slug'];

    protected $guarded = ['id'];

    public function translations()
    {
        return $this->hasMany(TagTranslation::class);
    }

    public function posts()
    {
    	return $this->morphedByMany(Post::class, 'taggables');
    }
}
