<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFatwaTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fatwa_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fatwa_id')->index()->unsigned();
            $table->foreign('fatwa_id')->references('id')->on('fatwas')->onDelete('cascade');
            $table->string('locale')->index();
            $table->string('question');
            $table->string('slug')->index()->unique();
            $table->string('answer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fatwa_translations');
    }
}
