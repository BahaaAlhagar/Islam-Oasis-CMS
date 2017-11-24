<?php

use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create some Series translation models
		factory(App\ItemTranslation::class, 120)->create();

		// Get all the scholars attaching up to 3 random series to each person
		$scholars = App\Scholar::all();

		// Get all the tags attaching up to 3 random series to each tag
		$tags = App\Tag::all();

		$series = App\Series::all();

		// Populate the pivot table
		App\Item::all()->each(function ($item) use ($scholars, $tags, $series) { 
		    $item->scholars()->attach(
		        $scholars->random(rand(1, 3))->pluck('id')->toArray()
		    );

		    $item->tags()->attach(
		        $tags->random(rand(1, 3))->pluck('id')->toArray()
		    );

		    $item->series()->associate(
		    	$series->random(1)->pluck('id')
		    );
		});
    }
}
