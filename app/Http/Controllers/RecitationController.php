<?php

namespace App\Http\Controllers;

use App\Recitation;
use App\RecitationTranslation;
use App\Http\Requests\storeRecitationRequest;
use Illuminate\Http\Request;

class RecitationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recitations = Recitation::with('translations')->latest()->paginate(10);

        return $this->makeResponse('admin/quran/manageRecitations', compact('recitations'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeRecitationRequest $request, Recitation $recitation = null)
    {
        if($recitation)
        {
            $recitation->translations()
                    ->create($request->all());

            return ['message' => 'تم اضافة ترجمة الرواية بنجاح'];
        }

        $recitation = Recitation::create([$request->locale => ['name' => $request->name]]);

        return ['message' => 'تم اضافة الرواية بنجاح'];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Recitation  $recitation
     * @return \Illuminate\Http\Response
     */
    public function update(storeRecitationRequest $request, RecitationTranslation $recitation)
    {
        $recitation->update($request->all());

        return ['message' => 'تم تحديث ترجمة الرواية'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Recitation  $recitation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recitation $recitation)
    {
        $recitation->delete();

        return ['message' => 'تم حذف الرواية!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Recitation  $recitation
     * @return \Illuminate\Http\Response
     */
    public function deleteTranslation(RecitationTranslation $translation)
    {
        $translation->delete();

        return ['message' => 'تم حذف ترجمة الرواية!'];
    }
}
