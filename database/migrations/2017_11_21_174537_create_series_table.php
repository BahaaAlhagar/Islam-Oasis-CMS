<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('series', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('type');
            $table->timestamps();
        });

        Schema::create('scholar_series', function (Blueprint $table) {
            $table->integer('scholar_id')->unsigned()->index();
            $table->foreign('scholar_id')->references('id')->on('scholars')->onDelete('cascade');
            $table->integer('series_id')->unsigned()->index();
            $table->foreign('series_id')->references('id')->on('series')->onDelete('cascade');
        });

        Schema::create('series_tag', function (Blueprint $table) {
            $table->integer('series_id')->unsigned()->index();
            $table->foreign('series_id')->references('id')->on('series')->onDelete('cascade');
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
        Schema::dropIfExists('series_tag');
        Schema::dropIfExists('scholar_series');
        Schema::dropIfExists('series');
    }
}
