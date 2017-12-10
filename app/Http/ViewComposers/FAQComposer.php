<?php

namespace App\Http\ViewComposers;

use App\Tag;
use App\Fatwa;
use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;

class FAQComposer
{
    protected $locale;
    protected $tags;
    protected $randomFAQ;

    public function __construct()
    {
        $this->locale = app()->getLocale();

        $this->randomFAQ = Cache::remember('FAQ_randomFAQ_'.$this->locale, 15, function () {
                    return Fatwa::translatedIn($this->locale)
                        ->where('type', 2)
                        ->inRandomOrder()
                        ->take(10)
                        ->withCurrentLocale()
                        ->get()
                        ->toArray();
        });

        $this->tags = Cache::remember('FAQ_tags_'.$this->locale, 15, function () {
            return Tag::translatedIn($this->locale)->has('FAQ')->withCurrentLocale()->withCount('FAQ')->get()->toArray();
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
        $randomFAQ = $this->randomFAQ;
        $view->with(compact('tags', 'randomFAQ'));
    }
}