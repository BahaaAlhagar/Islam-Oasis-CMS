@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.news') }} - {{ $tag['name'] }} 
@endsection

@section('content')
				
				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	{{ __('messages.tag') }} : 
		            	<a href="{{ route('newsTag.show', $tag->slug) }}">
		            		{{ $tag['name'] }}
		            	</a>
		            </h2>
		            @include('FrontEnd/tags/_navbar')
		        </div>

			    @foreach($posts as $post)
					<div class="blog-post">
			            <h2 class="blog-post-title">
			            	<a href="{{ route('news.show', $post->slug) }}">
			            		{{ $post->title }}
			            	</a>
			            </h2>
			            
			            <p class="blog-post-meta">{{ Date::parse($post->created_at)->diffForHumans() }}</p>

			            {!! str_limit($post->content, 200) !!}

			            <a href="{{ route('news.show', $post->slug) }}">{{ __('messages.more')}}</a>
			          </div>
				@endforeach

				{{ $posts->links() }}
@endsection

@section('sidebar')

				<div class="tags-list">
			    	@foreach($tags as $tag)
			    		<li><a href="{{ route('newsTag.show', $tag['slug']) }}">{{ $tag['name'] }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag['news_count'] }}</button></a></li>
					@endforeach
				</div>
				
@endsection
