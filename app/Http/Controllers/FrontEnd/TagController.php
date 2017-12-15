<?php

namespace App\Http\Controllers\FrontEnd;

use App\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class TagController extends Controller
{
    public function newsTag($slug)
    {
    	$tag = Tag::whereTranslation('slug', $slug)->withCurrentLocale()->firstOrFail();

    	$posts = $tag->news()->withCurrentLocale()->latest()->paginate(5);

    	$tags = Cache::remember('ctr_news_tags_'.$this->locale, 60 * 15, function () {
    		return Tag::translatedIn($this->locale)->has('news')->withCurrentLocale()->withCount('news')->get()->toArray();
    	});
    	
    	return view('FrontEnd/tags/newsIndex', compact('tag', 'posts', 'tags'));
    }

    public function lessonsTag($slug)
    {
    	$tag = Tag::whereTranslation('slug', $slug)->withCurrentLocale()->firstOrFail();

    	$posts = $tag->lessons()->withCurrentLocale()->latest()->paginate(5);

    	$tags = Cache::remember('ctr_lessons_tags_'.$this->locale, 60 * 15, function () {
    		return Tag::translatedIn($this->locale)->has('lessons')->withCurrentLocale()->withCount('lessons')->get()->toArray();
    	});
    	
    	return view('FrontEnd/tags/lessonsIndex', compact('tag', 'posts', 'tags'));
    }

    public function storiesTag($slug)
    {
    	$tag = Tag::whereTranslation('slug', $slug)->withCurrentLocale()->firstOrFail();

    	$posts = $tag->stories()->withCurrentLocale()->latest()->paginate(5);

    	$tags = Cache::remember('ctr_stories_tags_'.$this->locale, 60 * 15, function () {
    		return Tag::translatedIn($this->locale)->has('stories')->withCurrentLocale()->withCount('stories')->get()->toArray();
    	});
    	
    	return view('FrontEnd/tags/storiesIndex', compact('tag', 'posts', 'tags'));
    }

    public function fatawaTag($slug)
    {
        $tag = Tag::whereTranslation('slug', $slug)->withCurrentLocale()->firstOrFail();

        $fatawa = $tag->publishedFatawa()->with(['scholar' => function($query){
                    $query->withCurrentLocale()->with('photo');
                }])->withCurrentLocale()->latest()->paginate(5);

        $tags = Cache::remember('ctr_fatawa_tags_'.$this->locale, 60 * 15, function () {
            return Tag::translatedIn($this->locale)->has('publishedFatawa')->withCurrentLocale()->withCount('publishedFatawa')->get()->toArray();
        });
        
        return view('FrontEnd/tags/fatawaIndex', compact('tag', 'fatawa', 'tags'));
    }

    public function faqTag($slug)
    {
        $tag = Tag::whereTranslation('slug', $slug)->withCurrentLocale()->firstOrFail();

        $FAQ = $tag->FAQ()->withCurrentLocale()->latest()->paginate(5);

        $tags = Cache::remember('ctr_faq_tags_'.$this->locale, 60 * 15, function () {
            return Tag::translatedIn($this->locale)->has('FAQ')->withCurrentLocale()->withCount('FAQ')->get()->toArray();
        });
        
        return view('FrontEnd/tags/faqIndex', compact('tag', 'FAQ', 'tags'));
    }
}
