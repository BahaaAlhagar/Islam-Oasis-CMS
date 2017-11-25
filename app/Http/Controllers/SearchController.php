<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Series;
use App\Scholar;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function series($q, $type = null)
    {
    	$type ? $series = Series::whereType($type)->whereTranslationLike('name', '%'.$q.'%')->get() : $series = Series::whereTranslationLike('name', '%'.$q.'%')->get();

    	return $series;
    }
}
