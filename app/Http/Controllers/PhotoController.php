<?php

namespace App\Http\Controllers;

use Image;
use App\Item;
use App\Series;
use App\Scholar;
use App\Http\Requests\validatePhotoRequest;
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
    public function updateScholarPhoto(validatePhotoRequest $request, Scholar $scholar)
    {
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

        return ['message' => 'مشكلة فى تحميل الصورة الرجاء المحاولة لاحقا'];
    }

    public function updateSeriesPhoto(validatePhotoRequest $request, Series $series)
    {
        if($request->hasFile('photo'))
        {
            $stored_photo = $this->handlePhoto($request, $series, 'series_files');

            if($series->photo)
            {
                $series->photo()->update($stored_photo);
            } else {
                $series->photo()->create($stored_photo);
            }

            return ['message' => 'تم تحديث الصورة بنجاح'];
        }

        return ['message' => 'مشكلة فى تحميل الصورة الرجاء المحاولة لاحقا'];
    }

    public function updateItemPhoto(validatePhotoRequest $request, Item $item)
    {
        if($request->hasFile('photo'))
        {
            $stored_photo = $this->handlePhoto($request, $item, 'item_files');

            if($item->photo)
            {
                $item->photo()->update($stored_photo);
            } else {
                $item->photo()->create($stored_photo);
            }

            return ['message' => 'تم تحديث الصورة بنجاح'];
        }

        return ['message' => 'مشكلة فى تحميل الصورة الرجاء المحاولة لاحقا'];
    }


    public function handlePhoto($request, $owner, string $folder)
    {
        $file = $request->file('photo');

        if ($file->isValid()) {
        	// define name and store location
        	$photoName = 'photo.'.$file->extension();
        	$thumbName = 'thumbnail.'.$file->extension();
        	$storePath = $folder.'/'.$owner->id;

            // locations of photos
            $photo_path = $storePath. '/' .$photoName;
            $thumb_path = $storePath. '/' .$thumbName;

            //check folder availablity
            if(!file_exists(storage_path('app/public/'.$storePath)))
            {
                mkdir(storage_path('app/public/'.$storePath), 666, true);
            }

            // store the image
            $file->storeAs('public/'.$storePath, $photoName);

            // create a small copy of the image
            Image::make($file)->fit(200)
                            ->save(storage_path('app/public/'.$thumb_path));

            // return the stored file location 
            $storedFiles = [
                'link' => $photo_path,
                'thumbnail' => $thumb_path
            ];

            return $storedFiles;
        }
    }
}
