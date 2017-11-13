<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScholarTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scholar_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('scholar_id')->unsigned()->index();
            $table->foreign('scholar_id')->references('id')->on('scholars')->onDelete('cascade');
            $table->string('locale')->index();
            $table->string('name');
            $table->string('slug')->unique()->index();
            $table->text('biography')->nullable();
            $table->boolean('published');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scholar_translations');
    }
}
