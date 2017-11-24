<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScholarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scholars', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('scholarables', function (Blueprint $table) {
            $table->integer('scholar_id')->unsigned()->index();
            $table->foreign('scholar_id')->references('id')->on('scholars')->onDelete('cascade');
            $table->integer('scholarable_id')->index();
            $table->string('scholarable_type')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scholarables');
        Schema::dropIfExists('scholars');
    }
}
