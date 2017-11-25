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


// search routes
route::get('search/tags/{q}', 'SearchController@tags');
route::get('search/series/{q}/{type?}', 'SearchController@series');
route::get('search/scholars/{q}', 'SearchController@scholars');
route::get('search/recitations/{q}', 'SearchController@recitations');

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


// Quran routes
route::get('quran/scholar/{scholar?}', 'QuranController@index')->name('quran.index');
route::resource('quran', 'QuranController')->only('store', 'update', 'destroy');


// series routes
route::post('series/{series?}', 'SeriesController@store')->name('series.store');
route::get('series/{type?}', 'SeriesController@index')->name('series.index');
route::post('series/{series}/photo', 'PhotoController@updateSeriesPhoto');
route::delete('seriestranslation/{translation}', 'SeriesController@deleteTranslation');
route::resource('series', 'SeriesController')->only('update', 'destroy');


// items routes
route::post('items/{item?}', 'ItemController@store')->name('items.store');
route::get('items/{type?}', 'ItemController@index')->name('items.index');
route::post('items/{item}/photo', 'PhotoController@updateItemPhoto');
route::delete('itemtranslation/{translation}', 'ItemController@deleteTranslation');
route::resource('items', 'ItemController')->only('update', 'destroy');

});