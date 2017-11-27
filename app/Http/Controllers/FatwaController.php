<?php

namespace App\Http\Controllers;

use App\Fatwa;
use App\FatwaTranslation;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Fatwa $fatwa = null)
    {
        $tags = array_column($request->tags, 'tag_id');

        if($fatwa)
        {
            $fatwa->translations()->create($request->except('type', 'tags'));
            $fatwa->tags()->sync($tags);

            return ['message' => 'تم اضافة الترجمة بنجاح'];
        }
        
        $fatwa->create($request->only('type'));
        $fatwa->translations()->create($request->except('type', 'tags'));
        $fatwa->tags()->attach($tags);

        return ['message' => 'تمت الاضافة بنجاح'];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Fatwa  $fatwa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fatwa $fatwa)
    {
        $tags = array_column($request->tags, 'tag_id');

        $fatwa->update([
            $request->locale => ['title' => $request->title, 'content' => $request->content, 'published' => $request->published]
            ]);

        $fatwa->tags()->sync($tags);

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
