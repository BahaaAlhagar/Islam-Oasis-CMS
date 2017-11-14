<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Image;
use Illuminate\Support\Facades\Storage;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function makeResponse($template, $objects = [])
    {
        if (\Request::ajax())
        {
            return response()->json($objects);
        }

        return view($template, $objects);
    }

    public function handlePhoto($request, $owner, string $folder)
    {
        $file = $request->file('photo');

        if ($file->isValid()) {
        	// define name and store location
        	$photoName = 'photo.'.$file->extension();
        	$thumbName = 'thumbnail.'.$file->extension();
        	$storePath = $folder.'/'.$owner->id;

            //check folder availablities and clean old files if there old folder
            if(!file_exists(storage_path('app/public/'.$storePath)))
            {
                mkdir(storage_path('app/public/'.$storePath), 666, true);
            } else {
                Storage::deleteDirectory('public/'.$storePath);
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
