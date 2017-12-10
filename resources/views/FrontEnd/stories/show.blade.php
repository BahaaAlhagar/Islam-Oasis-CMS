@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.stories') }} - {{ $post->title }}
@endsection

@section('content')

				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	<a href="{{ route('stories.show', $post->slug) }}">
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
			    		<li><a href="{{ route('newsTag.show', $tag->slug) }}">{{ $tag->name }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag->stories_count }}</button></a></li>
					@endforeach
				</div>

				@if(count($relatedPosts))
					<hr><br>
					<div class="sidebar-module sidebar-module-inset">
			            <h4>{{ __('messages.relatedPosts') }}</h4>
			            @foreach($relatedPosts as $post)
				            <p>
					            <a href="{{ route('stories.show', $post['slug']) }}">
					            	{{ $post['title'] }}
					            </a>
				            </p>
			            @endforeach
			        </div>
			    @endif
@endsection

@section('sidebar')
	@include('FrontEnd/stories/_sidebar')
@endsection
