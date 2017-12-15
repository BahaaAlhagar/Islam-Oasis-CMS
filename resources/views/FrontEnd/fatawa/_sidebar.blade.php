
		<div class="sidebar-module">
			<h4>{{ __('messages.also_like') }}</h4>
			<ol class="list-unstyled">
				@foreach($randomFatawa as $fatwa)
					<li><a href="{{ route('fatawa.show', $fatwa['slug']) }}">{{ $fatwa['question'] }}</a></li>
				@endforeach
			</ol>
		</div>

		@if(count($tags))
			<div class="sidebar-module">
			    <h4>{{ __('messages.categories') }}</h4>
			    <span class="tags-list">
			    	@foreach($tags as $tag)
			    		<li><a href="{{ route('fatawaTag.show', $tag['slug']) }}">{{ $tag['name'] }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag['published_fatawa_count'] }}</button></a></li>
					@endforeach
				</span>
		  	</div>
		@endif
