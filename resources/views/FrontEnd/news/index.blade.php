@extends('FrontEnd/layouts/default')


@section('content')


			@foreach($news as $post)
				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	<a href="{{ route('news.show', $post->slug) }}">
		            		{{ $post->title }}
		            	</a>
		            </h2>
		            <p class="blog-post-meta">{{ $post->created_at->diffForHumans() }}</p>

		            {!! str_limit($post->content, 200) !!}

		            <a href="{{ route('news.show', $post->slug) }}">{{ __('messages.more')}}</a>
		          </div>
			@endforeach

			{{ $news->links() }}

@endsection

@section('sidebar')
	@include('FrontEnd/news/_sidebar')
@endsection
