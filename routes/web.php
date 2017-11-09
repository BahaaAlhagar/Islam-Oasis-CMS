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



route::group(['prefix' => 'admincp', 'middleware' => ['auth', 'admin', 'adminDefaultLocale']], function(){

route::view('/', 'admin/adminIndex');


// posts routes
route::get('posts?type={type?}', 'PostController@index')->name('posts.index');
route::resource('posts', 'PostController')->only('store', 'update', 'destroy');

// tags routes
route::post('tags/{tag?}', 'TagController@store')->name('tags.store');
route::patch('tags/{tag}', 'TagController@update')->name('tags.update');
route::resource('tags', 'TagController')->only('index', 'delete');

});