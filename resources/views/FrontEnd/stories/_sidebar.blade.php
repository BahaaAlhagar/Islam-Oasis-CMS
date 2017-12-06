
		<div class="sidebar-module">
			<h4>{{ __('messages.also_like') }}</h4>
			<ol class="list-unstyled">
				@foreach($randomArticles as $article)
					<li><a href="{{ route('stories.show', $article->slug) }}">{{ $article->title }}</a></li>
				@endforeach
			</ol>
		</div>

		<div class="sidebar-module">
		    <h4>{{ __('messages.categories') }}</h4>
		    <span class="tags-list">
		    	@foreach($tags as $tag)
		    		<li><a href="{{ route('storiesTag.show', $tag->slug) }}">#{{ $tag->translate(app()->getLocale())->name }}</a></li>
				@endforeach
			</span>
	  	</div>
