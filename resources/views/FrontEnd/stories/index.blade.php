@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.stories') }}
@endsection

@section('content')


			@foreach($stories as $post)
				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	<a href="{{ route('stories.show', $post->slug) }}">
		            		{{ $post->title }}
		            	</a>
		            </h2>
		            
		            <p class="blog-post-meta">{{ Date::parse($post->created_at)->diffForHumans() }}</p>

		            {!! str_limit($post->content, 200) !!}

		            <a href="{{ route('stories.show', $post->slug) }}">{{ __('messages.more')}}</a>
		          </div>
			@endforeach

			{{ $stories->links() }}

@endsection

@section('sidebar')
	@include('FrontEnd/stories/_sidebar')
@endsection
