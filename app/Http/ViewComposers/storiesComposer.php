<?php

namespace App\Http\ViewComposers;

use App\Tag;
use App\Post;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;

class storiesComposer
{
    /**
     * The user repository implementation.
     *
     * @var UserRepository
     */
    protected $locale;
    protected $tags;
    protected $randomArticles;

    /**
     * Create a new profile composer.
     *
     * @param  UserRepository  $stories
     * @return void
     */
    public function __construct()
    {
        $this->locale = app()->getLocale();

        $this->randomArticles = Cache::remember('stories_randomArticles_'.$this->locale, 15, function () {
                    return Post::translatedIn($this->locale)
                        ->where('type', 3)
                        ->inRandomOrder()
                        ->take(10)
                        ->withCurrentLocale()
                        ->get()
                        ->toArray();
        });

        $this->tags = Cache::remember('stories_tags_'.$this->locale, 15, function () {
            return Tag::translatedIn($this->locale)->has('stories')->withCurrentLocale()->withCount('stories')->get()->toArray();
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
        $tags = $this->tags;
        $randomArticles = $this->randomArticles;
        $view->with(compact('tags', 'randomArticles'));
    }
}