@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('messages.faq') }}
@endsection

@section('content')


			@foreach($faqs as $faq)
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

			{{ $faqs->links() }}

@endsection

@section('sidebar')
	@include('FrontEnd/faqs/_sidebar')
@endsection
