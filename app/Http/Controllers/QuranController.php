<?php

namespace App\Http\Controllers;

use App\Quran;
use App\Scholar;
use App\Recitation;
use App\ScholarTranslation;
use App\RecitationTranslation;
use Illuminate\Http\Request;

class QuranController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Scholar $scholar = null)
    {
        if($scholar){
            $qurans = Quran::latest()
                    ->where('scholar_id', $scholar)
                    ->with('translations', 'link', 'recitation', 'scholar')
                    ->paginate(10);
        } else {
            $qurans = Quran::latest()
                    ->with('translations', 'link', 'recitation', 'scholar')
                    ->paginate(10);
        }
        
        $scholars = ScholarTranslation::where('locale', config('translatable.locale'))
                                        ->orderBy('name')
                                        ->get();

        $recitations = RecitationTranslation::where('locale', config('translatable.locale'))
                                        ->orderBy('name')
                                        ->get();

        return $this->makeResponse('admin/quran/manageQuran', compact('qurans', 'scholars', 'recitations'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Quran  $quran
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quran $quran)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Quran  $quran
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quran $quran)
    {
        //
    }
}
