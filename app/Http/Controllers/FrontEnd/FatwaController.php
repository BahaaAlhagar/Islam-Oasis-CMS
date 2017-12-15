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
                    ->whereType(1)
                    ->whereHas('scholar', function($query){
                        $query->published();
                    })
                    ->latest()
                    ->with(['scholar' => function($query){
                    $query->withCurrentLocale()->with('photo');
                }])->withCurrentLocale()->paginate(5);

    	return view('FrontEnd/fatawa/index', compact('fatawa'));
    }

    public function show($slug)
    {
        $fatwa =  Fatwa::whereTranslation('slug', $slug)->with(['tags' => function($query){
                    $query->translatedIn($this->locale)->withCurrentLocale()->withCount('fatawa');
                }, 'scholar' => function($query){
                    $query->withCurrentLocale()->with('photo');
                }])->withCurrentLocale()->firstOrFail();

        $relatedFatawa = $fatwa->relatedFatawaByTag();
        
        return view('FrontEnd/fatawa/show', compact('fatwa', 'relatedFatawa'));
    }
}
