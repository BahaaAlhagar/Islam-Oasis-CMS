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
route::get('posts/{type}/{locale?}', 'PostController@index')->name('posts.index');
route::post('posts/{post?}', 'PostController@store')->name('posts.store');
route::delete('posttranslation/{translation}', 'PostController@deleteTranslation');
route::resource('posts', 'PostController')->only('update', 'destroy');


// tags routes
route::post('tags/{tag?}', 'TagController@store')->name('tags.store');
route::delete('tagtranslation/{translation}', 'TagController@deleteTranslation');
route::resource('tags', 'TagController')->only('index', 'update', 'destroy');


// scholars routes
route::post('scholars/{scholar?}', 'ScholarController@store')->name('scholars.store');
route::post('scholars/{scholar}/photo', 'PhotoController@updateScholarPhoto');
route::delete('scholartranslation/{translation}', 'ScholarController@deleteTranslation');
route::resource('scholars', 'ScholarController')->only('index', 'update', 'destroy');


// Quran recitations routes
route::post('recitations/{recitation?}', 'RecitationController@store')->name('recitations.store');
route::delete('recitationtranslation/{translation}', 'RecitationController@deleteTranslation');
route::resource('recitations', 'RecitationController')->only('index', 'update', 'destroy');


});