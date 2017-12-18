<?php

namespace App\Http\Controllers\FrontEnd;

use App\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Item::whereType(1)
        			->translatedIn($this->locale)
        			->has('translatedLinks')
        			->whereHas('scholars', function($query){
        				$query->published();
        			})->orWhereHas('series', function($query){
        				$query->published();
        			})->latest()
                    ->withCurrentLocale()
                    ->with(['translatedLinks', 'photo','tags.translations','series' => function($query){
                    	$query->withCurrentLocale()->with('photo', 'tags.translations', 'scholars.translations');
                    }, 'scholars' => function($query){
                    	$query->withCurrentLocale()->with('photo');
                    }])
                    ->paginate(10);

        return view('FrontEnd/books/index', compact('books'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $book = Item::whereTranslation('slug', $slug)
        			->withCurrentLocale()
        			->with(['scholars.translations', 'tags' => function($query){
        			        				$query->withCurrentLocale()->withCount('books');
        			        			}, 'series' => function($query){
        			        				$query->withCurrentLocale()->with(['photo', 'scholars.translations', 'items.translations', 'tags' => function($query){
        			        					$query->withCurrentLocale()->withCount('books');
        			        				}]);
        			        			}])
        			->firstOrFail();

        return view('FrontEnd/books/show', compact('book'));
    }
}
