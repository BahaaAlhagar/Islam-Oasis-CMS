@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.fatwa') }} - {{ $tag['name'] }} 
@endsection

@section('content')
				
				<div class="blog-post">
		            <h2 class="blog-post-title">
		            	{{ __('messages.tag') }} : 
		            	<a href="{{ route('fatawaTag.show', $tag->slug) }}">
		            		{{ $tag['name'] }}
		            	</a>
		            </h2>
		            @include('FrontEnd/tags/_navbar')
		        </div>

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

				<div class="tags-list">
			    	@foreach($tags as $tag)
			    		<li><a href="{{ route('fatawaTag.show', $tag['slug']) }}">{{ $tag['name'] }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag['fatawa_count'] }}</button></a></li>
					@endforeach
				</div>
				
@endsection
