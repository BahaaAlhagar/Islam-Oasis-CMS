<?php

namespace App\Http\Controllers\FrontEnd;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LessonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lessons = Post::translatedIn($this->locale)
                    ->whereType(2)->published()
                    ->latest()->paginate(5);

        return view('FrontEnd/lessons/index', compact('lessons'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::whereTranslation('slug', $slug)->with(['tags' => function($query){
            $query->translatedIn($this->locale)->withCurrentLocale()->withCount('lessons');
        }])->firstOrFail();

        $relatedPosts = $post->relatedPostsByTag();

        return view('FrontEnd/lessons/show', compact('post', 'relatedPosts'));
    }
}
