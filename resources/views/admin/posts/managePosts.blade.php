@extends('layouts/adminPanel')


@if($type == 1)
	@section('title', 'ادارة الاخبار')
@elseif($type == 2)
	@section('title', 'ادارة الدروس والمحاضرات')
@elseif($type == 3)
	@section('title', 'ادارة قصص الاسلام')
@endif


@section('heading')

@if($type == 1)
	ادارة الاخبار
@elseif($type == 2)
	ادارة الدروس والمحاضرات
@elseif($type == 3)
	ادارة قصص الاسلام
@endif

@endsection


@section('content')
	<div id="managePosts">

		
		<span class="col-md-10 text-center">
			عرض 
			<select v-model="current_view" @change="fetchPostsData()">
				<option value="all" selected>كل اللغات</option>
			    @foreach(LaravelLocalization::getSupportedLocales() as $key => $locale)
			    	<option value="{{$key}}">{{ $locale['native'] }}</option>
			    @endforeach
			</select>
		</span>


		@if($type == 1)
			<span class="col-md-2 text-center">
				<button @click="addNews()" class="btn btn-success pull-left">اضافة خبر</button>
			</span>
		@elseif($type == 2)
			<span class="col-md-2 text-center">
				<button @click="addLesson()" class="btn btn-success pull-left">اضافة درس</button>
			</span>
		@elseif($type == 3)
			<span class="col-md-2 text-center">
				<button @click="addStory()" class="btn btn-success pull-left">اضافة قصة</button>
			</span>
		@endif	

	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/managePosts.js') }}"></script>
@endsection