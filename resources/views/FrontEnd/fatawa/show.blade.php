@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.fatwa') }} - {{ $fatwa->question }}
@endsection

@section('content')

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

				            {!! $fatwa->answer !!}

				        </div>
				        <div class="addthis_inline_share_toolbox pull-left"></div>

				        <br><hr>
					    <div class="tags-list">
					    	@foreach($fatwa->tags as $tag)
					    		<li><a href="{{ route('fatawaTag.show', $tag->slug) }}">{{ $tag->name }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag->fatawa_count }}</button></a></li>
							@endforeach
						</div>
	                </div>
	            </div>

				@if(count($relatedFatawa))
					<div class="sidebar-module sidebar-module-inset">
			            <h4>{{ __('messages.relatedFatawa') }}</h4>
			            @foreach($relatedFatawa as $fatwa)
				            <p>
					            <a href="{{ route('fatawa.show', $fatwa['slug']) }}">
					            	{{ $fatwa['question'] }}
					            </a>
				            </p>
			            @endforeach
			        </div>
			    @endif
@endsection

@section('sidebar')
	@include('FrontEnd/fatawa/_sidebar')
@endsection
