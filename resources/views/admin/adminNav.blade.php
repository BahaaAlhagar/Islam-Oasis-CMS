<div id="admin_nav" class="panel panel-default">
	  <div class="panel-heading">
	  	لوحة تحكم الاداراة
	  </div>
	  <div class="panel-body">
	  		<ul class="list-group">

				<a href="{{ route('posts.index', ['type' => 1]) }}" class="list-group-item">
					الاخبار
				</a>

				<a href="{{ route('posts.index', ['type' => 2]) }}" class="list-group-item">
					الدروس - المحاضرات
				</a>

				<a href="{{ route('posts.index', ['type' => 3]) }}" class="list-group-item">
					قصص الاسلام
				</a>

				<a href="{{ route('tags.index') }}" class="list-group-item">
					التصنيفات
				</a>

				<a href="{{ route('scholars.index') }}" class="list-group-item">
					العلماء و القراء
				</a>

				<a href="{{ route('recitations.index') }}" class="list-group-item">
					الروايات والقراءات
				</a>

				<a href="{{ route('quran.index') }}" class="list-group-item">
					القران الكريم
				</a>

				<a href="{{ route('series.index') }}" class="list-group-item">
					المسلسلات والمجموعات
				</a>


			</ul>
	  </div>
</div>

