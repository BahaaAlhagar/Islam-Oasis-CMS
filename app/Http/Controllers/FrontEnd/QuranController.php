<?php

namespace App\Http\Controllers\FrontEnd;

use App\Quran;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuranController extends Controller
{
    public function index($scholar = null, $recitation = null, $name = null)
    {
    	$Quran = Quran::translatedIn($this->locale)
    					->has('link', 'publishedScholar')
    					->latest()
    					->paginate(10);

    	if($scholar)
    	{
    		$Quran = $Quran->where('scholar_id', $scholar)->paginate(10);
    	}

    	if($recitation)
    	{
    		$Quran = $Quran->where('recitation_id', $recitation)->paginate(10);
    	}

    	if($name)
    	{
    		$Quran = $Quran->whereHas('translations', function($query) use($name){
    				 		$query->whereLocale($this->locale)
    							->whereName($name);
    		})->paginate(10);
    	}

    	return view('FrontEnd/quran/index', compact('Quran'));
    }
}
