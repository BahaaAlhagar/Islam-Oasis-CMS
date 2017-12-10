<?php

namespace App\Http\Controllers\FrontEnd;

use App\Fatwa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FAQController extends Controller
{
    public function index()
    {
    	$faqs = Fatwa::translatedIn($this->locale)
                    ->whereType(2)
                    ->withCurrentLocale()
                    ->latest()
                    ->paginate(5);

    	return view('FrontEnd/faqs/index', compact('faqs'));
    }

    public function show($slug)
    {
        $faq =  Fatwa::whereTranslation('slug', $slug)->with(['tags' => function($query){
                    $query->translatedIn($this->locale)->withCurrentLocale()->withCount('FAQ');
                }])->withCurrentLocale()->firstOrFail();

        $relatedFAQ = $faq->relatedFatawaByTag();
        
        return view('FrontEnd/faqs/show', compact('faq', 'relatedFAQ'));
    }
}
