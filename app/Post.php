<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    // use SoftDeletes;
    protected $dates = ['deleted_at'];


    // dimsav translateble options
    use Translatable;

    public $translationModel = 'App\PostTranslations';

    public $translatedAttributes = ['locale', 'title', 'slug', 'content'];



    protected $guarded = ['id', 'user_id'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
