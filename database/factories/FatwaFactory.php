<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Fatwa::class, function (Faker $faker) {
    return [
        'type' => random_int(1, 2),
        'scholar_id' => App\Scholar::inRandomOrder()->first()->id,
    ];
});


$factory->define(App\FatwaTranslation::class, function (Faker $faker) {
    return [
        'fatwa_id' => factory(App\Fatwa::class)->create()->id,
        'locale'   => $faker->randomElement(['ar', 'en']),
        'question'   => $faker->sentence,
        'answer'   => $faker->paragraph
    ];
});
