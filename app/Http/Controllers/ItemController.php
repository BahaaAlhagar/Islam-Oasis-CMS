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
        $type ? $items = Item::where('type', $type)->with('translations', 'photo', 'tags', 'scholars', 'links', 'series')->latest()->paginate(10) : $items = Item::with('translations', 'photo', 'tags', 'scholars', 'links', 'series')->latest()->paginate(10);

        return $this->makeResponse('admin/items/manageItems', compact('items'));
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

            return ['message' => 'تم اضافة ترجمة الملف او الكتاب بنجاح'];

        } else {
            $item = Item::create(['type' => $request->type, 'order' => $request->order, 'series_id' => $request->series_id, $request->locale => ['name' => $request->name, 'description' => $request->description, 'language' => $request->language]]);

            $item->tags()->attach(array_unique($request->tags));
            $item->scholars()->attach(array_unique($request->scholars));

            return ['message' => 'تم اضافة الملف او الكتاب بنجاح'];
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

        return ['message' => 'تم تحديث ترجمة الملف او الكتاب'];
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

        return ['message' => 'تم حذف الملف او الكتاب!'];
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

        return ['message' => 'تم حذف ترجمة الملف او الكتاب!'];
    }
}
