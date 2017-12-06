<?php

namespace App\Http\ViewComposers;

use App\Tag;
use App\Post;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;

class newsComposer
{
    /**
     * The user repository implementation.
     *
     * @var UserRepository
     */
    protected $locale;
    protected $tags;
    protected $newsArchive;
    protected $randomArticles;

    /**
     * Create a new profile composer.
     *
     * @param  UserRepository  $news
     * @return void
     */
    public function __construct()
    {
        $this->locale = app()->getLocale();

        $this->newsArchive = Cache::remember('newsArchive_'.$this->locale, 60 * 15, function () {
                    return Post::translatedIn($this->locale)
                        ->where('type', 1)
                        ->published()
                        ->selectRaw('year(created_at) year, monthname(created_at) month, count(*) published')
                        ->groupBy('year', 'month')
                        ->orderByRaw('min(created_at) desc')
                        ->get()
                        ->toArray();
        });

        $this->randomArticles = Cache::remember('news_randomArticles_'.$this->locale, 60 * 15, function () {
                    return Post::translatedIn($this->locale)
                        ->where('type', 1)
                        ->inRandomOrder()
                        ->take(10)
                        ->get();
        });

        $this->tags = Cache::remember('news_tags_'.$this->locale, 60 * 15, function () {
            return Tag::translatedIn($this->locale)->whereHas('news', function($query){
                        $query->published();
                    })->with('translations')->withCount('news')->get();
        });
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $newsArchive = $this->newsArchive;
        $tags = $this->tags;
        $randomArticles = $this->randomArticles;
        $view->with(compact('newsArchive', 'tags', 'randomArticles'));
    }
}