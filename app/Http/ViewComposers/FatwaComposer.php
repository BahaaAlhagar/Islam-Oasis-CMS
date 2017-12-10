<?php

namespace App\Http\ViewComposers;

use App\Tag;
use App\Fatwa;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;

class FatwaComposer
{
    /**
     * The user repository implementation.
     *
     * @var UserRepository
     */
    protected $locale;
    protected $tags;
    protected $randomFatawa;

    /**
     * Create a new profile composer.
     *
     * @param  UserRepository  $news
     * @return void
     */
    public function __construct()
    {
        $this->locale = app()->getLocale();

        $this->randomFatawa = Cache::remember('random_fatawa_'.$this->locale, 15, function () {
                    return Fatwa::translatedIn($this->locale)
                        ->where('type', 1)
                        ->inRandomOrder()
                        ->take(10)
                        ->withCurrentLocale()
                        ->get()
                        ->toArray();
        });

        $this->tags = Cache::remember('fatawa_tags_'.$this->locale, 15, function () {
            return Tag::translatedIn($this->locale)->has('fatawa')->withCurrentLocale()->withCount('fatawa')->get()->toArray();
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
        $randomFatawa = $this->randomFatawa;
        $view->with(compact('tags', 'randomFatawa'));
    }
}