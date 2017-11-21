<?php

use Illuminate\Database\Seeder;

class SeriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		// create some Series translation models
		factory(App\SeriesTranslation::class, 120)->create();

		// Get all the scholars attaching up to 3 random series to each person
		$scholars = App\Scholar::all();

		// Get all the tags attaching up to 3 random series to each tag
		$tags = App\Tag::all();

		// Populate the pivot table
		App\Series::all()->each(function ($serie) use ($scholars, $tags) { 
		    $serie->scholars()->attach(
		        $scholars->random(rand(1, 3))->pluck('id')->toArray()
		    );
		    $serie->tags()->attach(
		        $tags->random(rand(1, 3))->pluck('id')->toArray()
		    );
		});
    }
}
