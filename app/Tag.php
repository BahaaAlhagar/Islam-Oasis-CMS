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
    	return $this->morphedByMany(Post::class, 'taggables');
    }

    public function series()
    {
    	return $this->belongsToMany(Series::class);
    }

    public function items()
    {
        return $this->BelongsToMany(Item::class);
    }
}
