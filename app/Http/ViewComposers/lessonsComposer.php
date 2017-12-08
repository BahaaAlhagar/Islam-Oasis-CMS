<?php

namespace App\Http\ViewComposers;

use App\Tag;
use App\Post;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;

class lessonsComposer
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
     * @param  UserRepository  $lessons
     * @return void
     */
    public function __construct()
    {
        $this->locale = app()->getLocale();

        $this->randomArticles = Cache::remember('lessons_randomArticles_'.$this->locale, 60 * 15, function () {
                    return Post::translatedIn($this->locale)
                        ->where('type', 2)
                        ->inRandomOrder()
                        ->take(10)
                        ->get();
        });

        $this->tags = Cache::remember('lessons_tags_'.$this->locale, 60 * 15, function () {
            return Tag::translatedIn($this->locale)->has('lessons')->with('translations')->withCount('lessons')->get();
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