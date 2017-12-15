@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.quran') }}
@endsection

@section('content')


			@foreach($Quran as $quran)
			{{ $quran['name'] }}
				<div class="panel panel-default">
	                <div class="panel-heading">
		                <span>
		                	@if($quran->scholar['photo'])
		                		<img src="{{ Storage::url($quran->scholar['photo']['thumbnail']) }}" width="60" height="60" border="1" class="img-circle">
		                	@else
		                		<img src="{{ Storage::url('scholar.png') }}" width="60" height="60" border="1" class="img-circle">
		                	@endif
		                	<a href="{{ route('scholarFatawa.show', $quran->scholar['slug']) }}">
		                		{{ $quran->scholar['name'] }}
		                	</a>
		                	<p class="blog-post-meta">{{ Date::parse($quran->created_at)->diffForHumans() }}</p>
		                </span>
	                </div>

	                <div class="panel-body">
	                    <div class="blog-post">
				            <h2 class="blog-post-title alert-info">
				            	<a href="{{ route('fatawa.show', $quran->slug) }}">
				            		{{ $quran->question }}
				            	</a>
				            </h2>

				            {!! str_limit($quran->answer, 200) !!}

				            <a href="{{ route('fatawa.show', $quran->slug) }}">{{ __('messages.more')}}</a>
				        </div>
	                </div>
	            </div>
	            
			@endforeach

			{{ $Quran->links() }}

@endsection

