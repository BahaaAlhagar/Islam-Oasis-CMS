<?php

namespace App\Http\Controllers\FrontEnd;

use App\Quran;
use Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuranController extends Controller
{
    public function index($scholar = null, $recitation = null, $name = null)
    {
        $Quran = Quran::translatedIn($this->locale)
                        ->whereHas('scholar', function($query){
                            $query->published();
                        });

        if($scholar)
        {
            $Quran = $Quran->where('scholar_id', $scholar);
        }

        if($recitation)
        {
            $Quran = $Quran->where('recitation_id', $recitation);
        }

        if($name)
        {
            $Quran = $Quran->whereHas('translations', function($query) use($name){
                            $query->whereLocale($this->locale)
                                ->whereName($name);
            });
        }


        $Quran = $Quran->with(['scholar' => function($query){
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
