@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.fatwa') }}
@endsection

@section('content')


			@foreach($fatawa as $fatwa)

				<div class="panel panel-default">
	                <div class="panel-heading">
		                <span>
		                	@if($fatwa->scholar['photo'])
		                		<img src="{{ Storage::url($fatwa->scholar['photo']['thumbnail']) }}" width="60" height="60" border="1" class="img-circle">
		                	@else
		                		<img src="{{ Storage::url('scholar.png') }}" width="60" height="60" border="1" class="img-circle">
		                	@endif
		                	<a href="{{ route('scholarFatawa.show', $fatwa->scholar['slug']) }}">
		                		{{ $fatwa->scholar['name'] }}
		                	</a>
		                	<p class="blog-post-meta">{{ Date::parse($fatwa->created_at)->diffForHumans() }}</p>
		                </span>
	                </div>

	                <div class="panel-body">
	                    <div class="blog-post">
				            <h2 class="blog-post-title alert-info">
				            	<a href="{{ route('fatawa.show', $fatwa->slug) }}">
				            		{{ $fatwa->question }}
				            	</a>
				            </h2>

				            {!! str_limit($fatwa->answer, 200) !!}

				            <a href="{{ route('fatawa.show', $fatwa->slug) }}">{{ __('messages.more')}}</a>
				        </div>
	                </div>
	            </div>
	            
			@endforeach

			{{ $fatawa->links() }}

@endsection

@section('sidebar')
	@include('FrontEnd/fatawa/_sidebar')
@endsection
