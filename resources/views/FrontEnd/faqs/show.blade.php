@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('messages.faq') }} - {{ $faq->question }}
@endsection

@section('content')

				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	<a href="{{ route('faq.show', $faq->slug) }}">
		            		{{ $faq->question }}
		            	</a>
		            </h2>
		            
		            <p class="blog-post-meta">{{ Date::parse($faq->created_at)->diffForHumans() }}</p>

		            {!! $faq->answer !!}
		        </div>

		        <div class="addthis_inline_share_toolbox pull-left"></div>

		        <br><hr>
			    <div class="tags-list">
			    	@foreach($faq->tags as $tag)
			    		<li><a href="{{ route('faqTag.show', $tag->slug) }}">{{ $tag->name }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag->f_a_q_count }}</button></a></li>
					@endforeach
				</div>

				@if(count($relatedFAQ))
					<hr><br>
					<div class="sidebar-module sidebar-module-inset">
			            <h4>{{ __('messages.relatedQuestions') }}</h4>
			            @foreach($relatedFAQ as $faq)
				            <p>
					            <a href="{{ route('faq.show', $faq['slug']) }}">
					            	{{ $faq['question'] }}
					            </a>
				            </p>
			            @endforeach
			        </div>
			    @endif
@endsection

@section('sidebar')
	@include('FrontEnd/faqs/_sidebar')
@endsection
