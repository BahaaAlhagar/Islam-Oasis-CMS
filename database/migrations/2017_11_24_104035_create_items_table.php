<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('type');
            $table->integer('series_id')->unsigned()->index()->nullable();
            $table->foreign('series_id')->references('id')->on('series');
            $table->integer('order')->nullable();
            $table->timestamps();
        });

        Schema::create('item_scholar', function (Blueprint $table) {
            $table->integer('item_id')->unsigned()->index();
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
            $table->integer('scholar_id')->unsigned()->index();
            $table->foreign('scholar_id')->references('id')->on('scholars')->onDelete('cascade');
        });

        Schema::create('item_tag', function (Blueprint $table) {
            $table->integer('item_id')->unsigned()->index();
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
            $table->integer('tag_id')->unsigned()->index();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_tag');
        Schema::dropIfExists('item_scholar');
        Schema::dropIfExists('items');
    }
}
