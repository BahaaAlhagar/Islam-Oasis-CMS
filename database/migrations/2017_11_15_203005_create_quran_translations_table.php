<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuranTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quran_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('quran_id')->unsigned()->index();
            $table->foreign('quran_id')->references('id')->on('qurans')->onDelete('cascade');
            $table->string('locale')->index();
            $table->string('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quran_translations');
    }
}
