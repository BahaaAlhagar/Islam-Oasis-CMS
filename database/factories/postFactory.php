<?php

use Faker\Generator as Faker;

/* @var Illuminate\Database\Eloquent\Factory $factory */

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'type' => random_int(1, 3),
        'user_id' => factory('App\User')->create()->id
    ];
});
