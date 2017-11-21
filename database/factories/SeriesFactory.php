<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Series::class, function (Faker $faker) {
    return [
        'type' => random_int(1,5)
    ];
});


$factory->define(App\SeriesTranslation::class, function (Faker $faker) {
    return [
    	'locale' => $faker->randomElement(['ar', 'en']),
    	'name' => $faker->sentence,
    	'description' => $faker->sentence,
    	'published' => $faker->boolean,
        'series_id' => factory('App\Series')->create()->id
    ];
});