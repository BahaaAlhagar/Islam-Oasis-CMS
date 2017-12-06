@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.lessons') }}
@endsection

@section('content')


			@foreach($lessons as $post)
				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	<a href="{{ route('lessons.show', $post->slug) }}">
		            		{{ $post->title }}
		            	</a>
		            </h2>
		            
		            <p class="blog-post-meta">{{ Date::parse($post->created_at)->diffForHumans() }}</p>

		            {!! str_limit($post->content, 200) !!}

		            <a href="{{ route('lessons.show', $post->slug) }}">{{ __('messages.more')}}</a>
		          </div>
			@endforeach

			{{ $lessons->links() }}

@endsection

@section('sidebar')
	@include('FrontEnd/lessons/_sidebar')
@endsection
