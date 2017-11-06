<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



route::group(['prefix' => 'admincp', 'middleware' => ['auth', 'admin']], function(){

route::view('/', 'admin/adminIndex');


// tags Route
route::resource('tags', 'TagController')->except('create', 'edit', 'show');

});