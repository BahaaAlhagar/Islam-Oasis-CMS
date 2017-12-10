<?php

namespace App\Http\Controllers\FrontEnd;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stories = Post::translatedIn($this->locale)
                    ->whereType(3)->published()
                    ->latest()->paginate(5);

        return view('FrontEnd/stories/index', compact('stories'));
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
            $query->translatedIn($this->locale)->withCurrentLocale()->withCount('stories');
        }])->firstOrFail();

        $relatedPosts = $post->relatedPostsByTag();

        return view('FrontEnd/stories/show', compact('post', 'relatedPosts'));
    }
}
