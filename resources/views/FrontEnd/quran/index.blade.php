@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.quran') }}
@endsection

@section('content')


			@foreach($Quran as $quran)

				<div class="panel panel-default">
	                <div class="panel-heading">
		                <span>
		                	@if(isset($quran['scholar']['photo']))
		                		<img src="{{ Storage::url($quran['scholar']['photo']['thumbnail']) }}" width="60" height="60" border="1" class="img-circle">
		                	@else
		                		<img src="{{ Storage::url('scholar.png') }}" width="60" height="60" border="1" class="img-circle">
		                	@endif
		                	<a href="{{ route('scholarQuran.show', $quran->scholar->slug) }}">
		                		{{ $quran->scholar->name }}
		                	</a>
		                	<p class="blog-post-meta">{{ Date::parse($quran['created_at'])->diffForHumans() }}</p>
		                </span>
	                </div>

	                <div class="panel-body">
	                    <div class="blog-post">
				            <h2 class="blog-post-title alert-info">
				            		{{ $quran->name }}
				            		<small class="blog-post-meta">{{ $quran->recitation->name }}</small>
				            </h2>
			            	<audio controls style="width: 100%">
				            	<source src="{{ $quran->link->url }}" type="audio/mp3">
				            	<source src="{{ $quran->link->url }}" type="audio/wav">
				            	<source src="{{ $quran->link->url }}" type="audio/mpeg">
				            	<source src="{{ $quran->link->url }}" type="audio/ogg">
				            	{{ __('messages.audio_support') }}
				            </audio>
				        </div>
	                </div>
	            </div>
	            
			@endforeach

			{{ $Quran->links() }}

@endsection

