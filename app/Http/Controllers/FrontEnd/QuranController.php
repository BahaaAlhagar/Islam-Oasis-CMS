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
        $currentPage = request()->has('page') ? request('page') : 1;

        $cacheKey = md5('quran_index_page_' . $this->locale . '_' . $currentPage . '_' . $scholar . '_' . $recitation);

        $Quran = Cache::remember($cacheKey, 15, function() use($scholar, $recitation, $name){

            $data = Quran::translatedIn($this->locale)
                            ->whereHas('scholar', function($query){
                                $query->published();
                            });

            if($scholar)
            {
                $data = $data->where('scholar_id', $scholar);
            }

            if($recitation)
            {
                $data = $data->where('recitation_id', $recitation);
            }

            if($name)
            {
                $data = $data->whereHas('translations', function($query) use($name){
                                $query->whereLocale($this->locale)
                                    ->whereName($name);
                });
            }


            $data = $data->with(['scholar' => function($query){
                                $query->withCurrentLocale()->with('photo');
                            }, 'recitation' => function($query){
                                $query->withCurrentLocale();
                            }, 'link'])
                            ->withCurrentLocale()
                            ->latest()
                            ->paginate(10)->toArray();

            return $data;
        });

    	return view('FrontEnd/quran/index', compact('Quran'));
    }
}
