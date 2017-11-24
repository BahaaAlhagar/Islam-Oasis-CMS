<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Item::class, function (Faker $faker) {
    return [
        'type' => random_int(1,5),
        'order' => random_int(1,25)
    ];
});


$factory->define(App\ItemTranslation::class, function (Faker $faker) {
    return [
    	'locale' => $faker->randomElement(['ar', 'en']),
    	'name' => $faker->sentence,
    	'description' => $faker->sentence,
    	'language' => $faker->word,
        'item_id' => factory('App\Item')->create()->id
    ];
});
