<?php

namespace App\Http\Controllers;

use App\Photo;
use App\Scholar;
use App\ScholarTranslation;
use App\Http\Requests\storeScholarRequest;
use Illuminate\Http\Request;

class ScholarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scholars = Scholar::with('translations', 'photo')->latest()->paginate(10);

        return $this->makeResponse('admin/scholars/manageScholars', compact('scholars'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeScholarRequest $request, Scholar $scholar = null)
    {
        if($scholar)
        {
            $scholar->translations()
                    ->create($request->all());

            return ['message' => 'تم اضافة ترجمة العالم او القارئ بنجاح'];
        }

        $scholar = Scholar::create([$request->locale => ['name' => $request->name, 'biography' => $request->biography, 'published' => $request->published]]);

        return ['message' => 'تم اضافة العالم او القارئ بنجاح'];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Scholar  $scholar
     * @return \Illuminate\Http\Response
     */
    public function update(storeScholarRequest $request, ScholarTranslation $scholar)
    {
        $scholar->update($request->all());

        return ['message' => 'تم تحديث ترجمة العالم او القارئ'];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Scholar  $scholar
     * @return \Illuminate\Http\Response
     */
    public function updatePhoto(Request $request, Scholar $scholar)
    {
        $photo = $request->validate(['photo' => 'required|image|max:2040']);

        if($request->hasFile('photo'))
        {
            $stored_photo = $this->handlePhoto($request, $scholar, 'scholar_files');

            if($scholar->photo)
            {
                $scholar->photo()->update($stored_photo);
            } else {
                $scholar->photo()->create($stored_photo);
            }


            return ['message' => 'we have a photo'];
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Scholar  $scholar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Scholar $scholar)
    {
        $scholar->delete();

        return ['message' => 'تم حذف العالم او القارئ!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Scholar  $scholar
     * @return \Illuminate\Http\Response
     */
    public function deleteTranslation(ScholarTranslation $translation)
    {
        $translation->delete();

        return ['message' => 'تم حذف ترجمة العالم او القارئ!'];
    }
}
