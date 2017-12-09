<?php

namespace App\Http\Controllers;

use App\Fatwa;
use App\FatwaTranslation;
use App\Http\Requests\storeFatwaRequest;
use Illuminate\Http\Request;

class FatwaController extends Controller
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
    public function index($type, $locale = null)
    {
        if(!$locale)
        {
            $fatwas = Fatwa::where('type', $type)
                    ->with('translations', 'scholar', 'tags')
                    ->latest()->paginate(10);
        } else {
            $fatwas = Fatwa::translatedIn($locale)
                    ->where('type', $type)
                    ->with('translations', 'scholar', 'tags')
                    ->latest()->paginate(10);
        }

        return $this->makeResponse('admin/fatwas/manageFatwas', compact('fatwas', 'type'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\storeFatwaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeFatwaRequest $request, Fatwa $fatwa = null)
    {
        if($fatwa)
        {
            $fatwa->update($request->only('scholar_id', 'type'));
            $fatwa->translations()->create($request->only('locale', 'question', 'answer'));
            $fatwa->tags()->sync(array_unique($request->tags));

            return ['message' => 'تم اضافة الترجمة بنجاح'];
        }
        
        $fatwa = Fatwa::create($request->only('type', 'scholar_id'));
        $fatwa->translations()->create($request->only('locale', 'question', 'answer'));
        $fatwa->tags()->attach(array_unique($request->tags));

        return ['message' => 'تمت الاضافة بنجاح'];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\storeFatwaRequest  $request
     * @param  \App\Fatwa  $fatwa
     * @return \Illuminate\Http\Response
     */
    public function update(storeFatwaRequest $request, Fatwa $fatwa)
    {

        $fatwa->update([
            'scholar_id' => $request->scholar_id,
            $request->locale => ['question' => $request->question, 'answer' => $request->answer]
            ]);

        $fatwa->tags()->sync(array_unique($request->tags));

        return ['message' => 'تم التحديث بنجاح'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Fatwa  $fatwa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fatwa $fatwa)
    {
        $fatwa->delete();

        return ['message' => 'تم حذف المنشور'];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FatwaTranslation  $translation
     * @return \Illuminate\Http\Response
     */
    public function deleteTranslation(FatwaTranslation $translation)
    {
        $translation->delete();

        return ['message' => 'تم حذف ترجمة المنشور'];
    }
}
