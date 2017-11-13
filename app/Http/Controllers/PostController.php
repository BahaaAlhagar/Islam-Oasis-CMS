<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Post;
use App\TagTranslation;
use App\PostTranslation;
use App\Http\Requests\storePostRequest;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($type, $locale = null)
    {
        if(!$locale)
        {
            $posts = Post::where('type', $type)
                    ->with('translations', 'photo', 'tags')
                    ->latest()->paginate(10);
        } else {
            $posts = Post::translatedIn($locale)
                    ->where('type', $type)
                    ->with('translations', 'photo', 'tags')
                    ->latest()->paginate(10);
        }

        $tags = TagTranslation::where('locale', config('translatable.locale'))
                                ->orderBy('name')->get();

        return $this->makeResponse('admin/posts/managePosts', compact('posts', 'type', 'tags'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storePostRequest $request, Post $post = null)
    {
        $tags = array_column($request->tags, 'tag_id');

        if($post)
        {
            $post->translations()->create($request->except('type', 'tags'));
            $post->tags()->sync($tags);

            return ['message' => 'تم اضافة الترجمة بنجاح'];
        }

        $user = auth()->user();
        $post = $user->posts()->create($request->only('type'));
        $post->translations()->create($request->except('type', 'tags'));
        $post->tags()->attach($tags);

        return ['message' => 'تمت الاضافة بنجاح'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(storePostRequest $request, Post $post)
    {
        $tags = array_column($request->tags, 'tag_id');

        $post->update([
            $request->locale => ['title' => $request->title, 'content' => $request->content, 'published' => $request->published]
            ]);

        $post->tags()->sync($tags);

        return ['message' => 'تم التحديث بنجاح'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return ['message' => 'تم حذف المنشور'];
    }
}
