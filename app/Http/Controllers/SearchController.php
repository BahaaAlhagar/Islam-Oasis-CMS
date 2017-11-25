<?php

namespace App\Http\Controllers;

use App\Series;
use App\TagTranslation;
use App\ScholarTranslation;
use Illuminate\Http\Request;

class SearchController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('admin');
	}

	public function tags($q)
    {
    	$tags = TagTranslation::where('name', 'LIKE', '%'.$q.'%')->get();

    	return $tags;
    }

    public function scholars($q)
    {
    	$scholars = ScholarTranslation::where('name', 'LIKE', '%'.$q.'%')->get();

    	return $scholars;
    }

    public function series($q, $type = null)
    {
    	$type ? $series = Series::whereType($type)->whereTranslationLike('name', '%'.$q.'%')->get() : $series = Series::whereTranslationLike('name', '%'.$q.'%')->get();

    	return $series;
    }

}
