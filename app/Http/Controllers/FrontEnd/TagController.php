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
    	$tag = Tag::whereTranslation('slug', $slug)->firstOrFail();

    	$posts = $tag->news()->paginate(5);

    	$tags = Cache::remember('ctr_news_tags_'.$this->locale, 60 * 15, function () {
    		return Tag::has('news')->withCount('news')->get();
    	});
    	
    	return view('FrontEnd/tags/newsIndex', compact('tag', 'posts', 'tags'));
    }
}
