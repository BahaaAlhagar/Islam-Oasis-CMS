<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Item;
use App\Series;
use App\Scholar;
use App\ItemTranslation;
use App\SeriesTranslation;
use Illuminate\Http\Request;

class ItemController extends Controller
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
    public function index($type = null)
    {
        $type ? $items = Item::where('type', $type)->with('translations', 'photo', 'tags', 'scholars', 'links')->latest()->paginate(10) : $items = Item::with('translations', 'photo', 'tags', 'scholars', 'links')->latest()->paginate(10);

        $scholars = Scholar::translatedIn(config('translatable.locale'))->get();

        $tags = Tag::translatedIn(config('translatable.locale'))->get();

        $series = SeriesTranslation::whereLocale(config('translatable.locale'))->get();

        return $this->makeResponse('admin/items/manageItems', compact('items', 'tags', 'scholars', 'series'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Item $item = null)
    {
        if($item)
        {
            $item->translations()
                    ->create($request->only('locale', 'name', 'description', 'published'));

            $item->tags()->sync($request->tags);
            $item->scholars()->sync($request->scholars);

            return ['message' => 'تم اضافة ترجمة المجموعة بنجاح'];

        } else {
            $item = Item::create(['type' => $request->type, $request->locale => ['name' => $request->name, 'description' => $request->description, 'published' => $request->published]]);

            $item->tags()->attach($request->tags);
            $item->scholars()->attach($request->scholars);

            return ['message' => 'تم اضافة المجموعة بنجاح'];
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        $item->tags()->sync(request('tags'));
        $item->scholars()->sync(request('scholars'));

        $item->update(['type' => $request->type, $request->locale => ['name' => $request->name, 'description' => $request->description, 'published' => $request->published]]);

        return ['message' => 'تم تحديث ترجمة المجموعة'];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $item->delete();

        return ['message' => 'تم حذف المجموعة!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ItemTranslation  $translation
     * @return \Illuminate\Http\Response
     */
    public function deleteTranslation(ItemTranslation $translation)
    {
        $translation->delete();

        return ['message' => 'تم حذف ترجمة المجموعة!'];
    }
}
