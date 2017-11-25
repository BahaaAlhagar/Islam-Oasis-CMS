<?php

namespace App\Http\Controllers;

use App\Link;
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

    public function update(storeLinkRequest $request, Link $link)
    {
    	$link->update($request->all());

    	return ['message' => 'تم تحديث الرابط بنجاح'];
    }

    public function destroy(Link $link)
    {
    	$link->delete();

    	return ['message' => 'تم حذف الرابط بنجاح'];
    }
}
