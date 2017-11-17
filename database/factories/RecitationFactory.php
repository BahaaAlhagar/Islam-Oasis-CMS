<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Recitation::class, function (Faker $faker) {
    return [
        
    ];
});

$factory->define(App\RecitationTranslation::class, function (Faker $faker) {
    return [
    	'locale' => $faker->randomElement(['ar', 'en']),
        'name' => $faker->sentence,
        'recitation_id' => factory(App\Recitation::class)->create()->id
    ];
});
