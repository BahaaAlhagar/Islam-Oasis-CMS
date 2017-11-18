<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];

    public function linkable()
    {
    	return $this->morphTo();
    }
}
