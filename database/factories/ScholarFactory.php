<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Scholar::class, function (Faker $faker) {
    return [
        
    ];
});

$factory->define(App\ScholarTranslation::class, function (Faker $faker) {
    return [
    	'locale' => $faker->randomElement(['ar', 'en']),
        'name' => $faker->name,
        'biography' => $faker->sentence,
        'published' => $faker->boolean,
        'scholar_id' => factory('App\Scholar')->create()->id
    ];
});
