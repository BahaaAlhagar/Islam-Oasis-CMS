<?php

namespace App\Http\Controllers;

use App\Tag;
use App\TagTranslation;
use App\Http\Requests\storeTagRequest;
use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::with(['translations' => function($query){
            $query->orderBy('locale');
        }])->latest()->paginate(10);

        return $this->makeResponse('admin/tags/manageTags', compact('tags'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeTagRequest $request, Tag $tag = null)
    {
        if($tag)
        {
            $tag->translations()
                    ->create($request->all());

            return ['message' => 'تم اضافة التصنيف بنجاح'];
        }

        $tag = Tag::create([$request->locale => ['name' => $request->name]]);

        return ['message' => 'تم اضافة التصنيف بنجاح'];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function update(storeTagRequest $request, TagTranslation $tag)
    {
        $tag->update($request->all());

        return ['message' => 'تم تحديث ترجمة التصنيف'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag)
    {
        //
    }
}
