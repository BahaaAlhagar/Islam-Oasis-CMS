<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];

    public function photoable()
    {
    	return $this->morphTo();
    }
}
