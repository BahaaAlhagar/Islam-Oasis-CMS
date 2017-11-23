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
                    ->create($request->only('locale', 'name', 'description', 'published'));

            $series->tags()->attach($request->tags);
            $series->scholars()->attach($request->scholars);

            return ['message' => 'تم اضافة ترجمة المجموعة بنجاح'];

        } else {
            $series = Series::create(['type' => $request->type, $request->locale => ['name' => $request->name, 'description' => $request->description, 'published' => $request->published]]);

            $series->tags()->sync($request->tags);
            $series->scholars()->sync($request->scholars);

            return ['message' => 'تم اضافة المجموعة بنجاح'];
        }
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

        return ['message' => 'تم تحديث ترجمة المجموعة'];
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

        return ['message' => 'تم حذف المجموعة!'];
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

        return ['message' => 'تم حذف ترجمة المجموعة!'];
    }
}
