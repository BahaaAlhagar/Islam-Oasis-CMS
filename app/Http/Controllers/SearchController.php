<?php

namespace App\Http\Controllers;

use App\Series;
use App\Tag;
use App\Scholar;
use App\Recitation;
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
    	$tags = Tag::whereTranslationLike('name', '%'.$q.'%')->get();

    	return $tags;
    }

    public function scholars($q)
    {
    	$scholars = Scholar::whereTranslationLike('name', '%'.$q.'%')->get();

    	return $scholars;
    }

    public function series($q, $type = null)
    {
    	$type ? $series = Series::whereType($type)->whereTranslationLike('name', '%'.$q.'%')->get() : $series = Series::whereTranslationLike('name', '%'.$q.'%')->get();

    	return $series;
    }

    public function recitations($q)
    {
        $recitations = Recitation::whereTranslationLike('name', '%'.$q.'%')->get();

        return $recitations;
    }
}
