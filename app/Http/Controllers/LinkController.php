<?php

namespace App\Http\Controllers;

use App\Item;
use App\Http\Requests\storeLinkRequest;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    public function storeItemLink(storeLinkRequest $request, Item $item)
    {
    	$item->links()->create($request->all());

    	return ['message' => 'تم اضافة الرابط بنجاح'];
    }
}
