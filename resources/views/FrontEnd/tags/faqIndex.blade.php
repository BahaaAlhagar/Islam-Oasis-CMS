@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('messages.faq') }} - {{ $tag['name'] }} 
@endsection

@section('content')
				
				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	{{ __('messages.tag') }} : 
		            	<a href="{{ route('faqTag.show', $tag->slug) }}">
		            		{{ $tag['name'] }}
		            	</a>
		            </h2>
		            @include('FrontEnd/tags/_navbar')
		        </div>

			    @foreach($FAQ as $faq)
					<div class="blog-post">
			            <h2 class="blog-post-title">
			            	<a href="{{ route('faq.show', $faq->slug) }}">
			            		{{ $faq->question }}
			            	</a>
			            </h2>
			            
			            <p class="blog-post-meta">{{ Date::parse($faq->created_at)->diffForHumans() }}</p>

			            {!! str_limit($faq->answer, 200) !!}

			            <a href="{{ route('faq.show', $faq->slug) }}">{{ __('messages.more')}}</a>
			        </div>
				@endforeach

				{{ $FAQ->links() }}
@endsection

@section('sidebar')

				<div class="tags-list">
			    	@foreach($tags as $tag)
			    		<li><a href="{{ route('faqTag.show', $tag['slug']) }}">{{ $tag['name'] }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag['f_a_q_count'] }}</button></a></li>
					@endforeach
				</div>
				
@endsection
