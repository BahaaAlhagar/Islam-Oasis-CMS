<?php

namespace App\Http\Controllers\FrontEnd;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = Post::translatedIn($this->locale)
                    ->whereType(1)->published()
                    ->latest()->withCurrentLocale()
                    ->paginate(5);

        return view('FrontEnd/news/index', compact('news'));
    }

    public function listBasedOnDate($month, $year)
    {
        $news = Post::translatedIn($this->locale)
                    ->whereType(1)
                    ->filter(['month' => $month, 'year' => $year])
                    ->published()->latest()
                    ->withCurrentLocale()->paginate(5);

        return view('FrontEnd/news/index', compact('news'));
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
            $query->translatedIn($this->locale)->withCurrentLocale()->withCount('news');
        }])->withCurrentLocale()->firstOrFail();

        $relatedPosts = $post->relatedPostsByTag();
        
        return view('FrontEnd/news/show', compact('post', 'relatedPosts'));
    }
}
