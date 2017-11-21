<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Series;
use App\Scholar;
use App\SeriesTranslation;
use Illuminate\Http\Request;

class SeriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($type = null)
    {
        $type ? $series = Series::where('type', $type)->with('translations', 'photo', 'tags', 'scholars')->latest()->paginate(10) : $series = Series::with('translations', 'photo', 'tags', 'scholars')->latest()->paginate(10);

        $scholars = Scholar::translatedIn(config('translatable.locale'))->get();

        $tags = Tag::translatedIn(config('translatable.locale'))->get();

        return $this->makeResponse('admin/series/manageSeries', compact('series', 'tags', 'scholars'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Series $series = null)
    {
        if($series)
        {
            $series->translations()
                    ->create($request->all());

            return ['message' => 'تم اضافة ترجمة العالم او القارئ بنجاح'];
        }

        $series = Series::create([$request->locale => ['name' => $request->name, 'biography' => $request->biography, 'published' => $request->published]]);

        return ['message' => 'تم اضافة العالم او القارئ بنجاح'];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SeriesTranslation $series)
    {
        $series->update($request->all());

        return ['message' => 'تم تحديث ترجمة العالم او القارئ'];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function destroy(Series $series)
    {
        $series->delete();

        return ['message' => 'تم حذف العالم او القارئ!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Series  $series
     * @return \Illuminate\Http\Response
     */
    public function deleteTranslation(SeriesTranslation $translation)
    {
        $translation->delete();

        return ['message' => 'تم حذف ترجمة العالم او القارئ!'];
    }
}
