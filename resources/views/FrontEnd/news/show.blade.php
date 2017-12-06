@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ $post->title }}
@endsection

@section('content')

				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	<a href="{{ route('news.show', $post->slug) }}">
		            		{{ $post->title }}
		            	</a>
		            </h2>
		            
		            <p class="blog-post-meta">{{ Date::parse($post->created_at)->diffForHumans() }}</p>

		            {!! $post->content !!}
		        </div>

		        <div class="addthis_inline_share_toolbox pull-left"></div>

		        <br><hr>
			    <div class="tags-list">
			    	@foreach($post->tags as $tag)
			    		<li><a href="{{ route('newsTag.show', $tag->slug) }}">#{{ $tag->name }}</a></li>
					@endforeach
				</div>


@endsection

@section('sidebar')
	@include('FrontEnd/news/_sidebar')
@endsection