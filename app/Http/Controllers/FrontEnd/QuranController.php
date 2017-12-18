<?php

namespace App\Http\Controllers\FrontEnd;

use App\Quran;
use Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuranController extends Controller
{
    public function index()
    {
        $Quran = Quran::translatedIn($this->locale)
                        ->whereHas('scholar', function($query){
                            $query->published();
                        })->with(['scholar' => function($query){
                            $query->withCurrentLocale()->with('photo');
                        }, 'recitation' => function($query){
                            $query->withCurrentLocale();
                        }, 'link'])
                        ->withCurrentLocale()
                        ->latest()
                        ->paginate(10);

    	return view('FrontEnd/quran/index', compact('Quran'));
    }
}
