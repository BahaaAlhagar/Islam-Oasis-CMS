<?php

namespace App\Http\Controllers;

use App\Quran;
use App\Scholar;
use App\Recitation;
use App\ScholarTranslation;
use App\RecitationTranslation;
use App\Http\Requests\storeQuranRequest;
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
    public function index($scholar = null)
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

        $scholars = Scholar::TranslatedIn(config('translatable.locale'))->get();

        return $this->makeResponse('admin/quran/manageQuran', compact('qurans', 'scholars'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeQuranRequest $request)
    {
        $languageData = [];

        foreach(config('translatable.locales') as $locale)
        {
            $language = ['locale' => $locale, 'name' => $request->input('name.'.$locale)];
            $languageData[] = $language;
        }
        
        $quran = Quran::create($request->only('scholar_id', 'recitation_id'));

        $quran->translations()->createMany($languageData);
        $quran->link()->create($request->only('url'));

        return ['message' => 'تم اضافة السورة بنجاح'];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Quran  $quran
     * @return \Illuminate\Http\Response
     */
    public function update(storeQuranRequest $request, Quran $quran)
    {
        $data = ['scholar_id' => $request->scholar_id, 'recitation_id' => $request->recitation_id];

        foreach(config('translatable.locales') as $locale)
        {
            $data[$locale] = ['name' => $request->input('name.'.$locale)];
        }

        $quran->update($data);

        $quran->link ? $quran->link()->update($request->only('url')) : $quran->link()->create($request->only('url'));

        return ['message' => 'تم تحديث بيانات السورة بنجاح'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Quran  $quran
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quran $quran)
    {
        if($quran->link)
        {
            $quran->link->delete();
        }

        $quran->delete();

        return ['message' => 'تم حذف السورة بنجاح'];
    }
}
