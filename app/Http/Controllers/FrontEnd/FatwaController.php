<?php

namespace App\Http\Controllers\FrontEnd;

use App\Fatwa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FatwaController extends Controller
{
    public function index()
    {
    	return view('FrontEnd/fatawa/index');
    }

    public function show($slug)
    {

    }
}
