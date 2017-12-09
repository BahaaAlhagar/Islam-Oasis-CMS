<?php

namespace App\Http\Controllers\FrontEnd;

use App\Fatwa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FatwaController extends Controller
{
    public function index()
    {
    	$fatawa = Fatwa::translatedIn($this->locale)
                    ->whereType(1)->latest()
                    ->with('scholar.photo')->paginate(5);

    	return view('FrontEnd/fatawa/index', compact('fatawa'));
    }

    public function show($slug)
    {
        $fatwa = Fatwa::whereTranslation('slug', $slug)->with(['tags' => function($query){
            $query->translatedIn($this->locale)->with('translations')->withCount('fatawa');
        }, 'scholar'])->firstOrFail();

        $relatedFatawa = $fatwa->relatedFatawaByTag();
        
        return view('FrontEnd/fatawa/show', compact('fatwa', 'relatedFatawa'));
    }
}
