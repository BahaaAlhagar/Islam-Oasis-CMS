<?php

namespace App\Http\Controllers;

use Image;
use App\Scholar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('admin')->only('updateScholarPhoto');
	}
	/**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Scholar  $scholar
     * @return \Illuminate\Http\Response
     */
    public function updateScholarPhoto(Request $request, Scholar $scholar)
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


            return ['message' => 'تم تحديث الصورة بنجاح'];
        }
    }


    public function handlePhoto($request, $owner, string $folder)
    {
        $file = $request->file('photo');

        if ($file->isValid()) {
        	// define name and store location
        	$photoName = 'photo.'.$file->extension();
        	$thumbName = 'thumbnail.'.$file->extension();
        	$storePath = $folder.'/'.$owner->id;

            //check folder availablity
            if(!file_exists(storage_path('app/public/'.$storePath)))
            {
                mkdir(storage_path('app/public/'.$storePath), 666, true);
            }

            // create a small copy of the image
            Image::make($file)->fit(200)
                            ->save(storage_path('app/public/'.$storePath .'/'. $thumbName));

            // store the image
            $file->storeAs('public/'.$storePath, $photoName);

            // locations of photos
            $photo_path = $storePath. '/' .$photoName;
            $thumb_path = $storePath. '/' .$thumbName;


            // return the stored file location 
            $storedFiles = [
                'link' => $photo_path,
                'thumbnail' => $thumb_path
            ];

            return $storedFiles;
        }
    }
}
