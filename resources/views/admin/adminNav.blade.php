<div id="admin_nav" class="panel panel-default">
	  <div class="panel-heading">
	  	لوحة تحكم الاداراة
	  </div>
	  <div class="panel-body">
	  		<ul class="list-group">

	  			@if(config('CMS.SHOW_NEWS'))
					<a href="{{ route('posts.index', ['type' => 1]) }}" class="list-group-item">
						الاخبار
					</a>
				@endif

				@if(config('CMS.SHOW_LESSONS'))
					<a href="{{ route('posts.index', ['type' => 2]) }}" class="list-group-item">
						الدروس - المحاضرات
					</a>
				@endif

				@if(config('CMS.SHOW_STORIES'))
					<a href="{{ route('posts.index', ['type' => 3]) }}" class="list-group-item">
						قصص الاسلام
					</a>
				@endif


				<a href="{{ route('tags.index') }}" class="list-group-item">
					التصنيفات
				</a>

				<a href="{{ route('scholars.index') }}" class="list-group-item">
					العلماء و القراء
				</a>


			</ul>
	  </div>
</div>

