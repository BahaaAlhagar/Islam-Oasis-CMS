@extends('layouts/adminPanel')


@if($type == 1)
	@section('title', 'ادارة الاخبار')
@elseif($type == 2)
	@section('title', 'ادارة الدروس والمقالات')
@elseif($type == 3)
	@section('title', 'ادارة قصص الاسلام')
@endif


@section('heading')

	@if($type == 1)
		ادارة الاخبار
	@elseif($type == 2)
		ادارة الدروس والمقالات
	@elseif($type == 3)
		ادارة قصص الاسلام
	@endif

@endsection


@section('content')
	<div id="managePosts">

		
		<span class="col-md-10 text-center">
			عرض 
			<select v-model="current_view" @change="refetchData()">
				<option value='' >الكل</option>
			    @foreach(LaravelLocalization::getSupportedLocales() as $key => $locale)
			    	<option value="{{ $key }}">المترجم الى {{ $locale['native'] }}</option>
			    @endforeach
			</select>
		</span>


		@if($type == 1)
			<span class="col-md-2 text-center">
				<button @click="addPost()" class="btn btn-success pull-left">اضافة خبر</button>
			</span>
		@elseif($type == 2)
			<span class="col-md-2 text-center">
				<button @click="addPost()" class="btn btn-success pull-left">اضافة درس</button>
			</span>
		@elseif($type == 3)
			<span class="col-md-2 text-center">
				<button @click="addPost()" class="btn btn-success pull-left">اضافة قصة</button>
			</span>
		@endif	

		<posts-table :type="{{ $type }}" :posts="posts" :tags="tags" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></posts-table>

        <v-paginator class="text-center" v-show="posts.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>

	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/managePosts.js') }}"></script>
@endsection