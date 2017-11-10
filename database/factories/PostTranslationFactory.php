<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\PostTranslation::class, function (Faker $faker) {
    return [
    	'locale' => function()
    	{
    		$langs = ['ar', 'en'];
    		$key = array_rand($langs);
    		return $langs[$key];
    	},
    	'title' => $faker->sentence,
    	'content' => $faker->paragraph,
        'published' => $faker->boolean,
        'post_id' => factory('App\Post')->create()->id
    ];
});
