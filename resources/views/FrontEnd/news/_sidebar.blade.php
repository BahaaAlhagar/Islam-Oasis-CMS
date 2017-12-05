
		<div class="sidebar-module">
			<h4>{{ __('messages.archive') }}</h4>
			<ol class="list-unstyled">
				@foreach($newsArchive as $stat)
			  		<li><a href="{{ route('news.list', ['month' => $stat['month'], 'year' => $stat['year']]) }}">{{ __('date.month.'.Date::parse($stat['month'])->month) }} {{ $stat['year'] }}</a></li>
			  	@endforeach
			</ol>
		</div>

		<div class="sidebar-module">
			<h4>{{ __('messages.also_like') }}</h4>
			<ol class="list-unstyled">
				@foreach($randomArticles as $article)
					<li><a href="{{ route('news.show', $article->slug) }}">{{ $article->title }}</a></li>
				@endforeach
			</ol>
		</div>

		<div class="sidebar-module">
		    <h4>{{ __('messages.categories') }}</h4>
		    <span class="tags-list">
		    	@foreach($tags as $tag)
		    		<li><a href="{{ route('newsTag.show', $tag->slug) }}">#{{ $tag->name }}</a></li>
				@endforeach
			</span>
	  	</div>
