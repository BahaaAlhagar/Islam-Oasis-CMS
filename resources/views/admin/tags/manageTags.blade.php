@extends('layouts/adminPanel')


@section('title', 'ادارة التصنيفات')


@section('heading')
	ادارة التصنيفات
@endsection


@section('content')
	<div id="manageTags">
		<span class="col-md-10 text-center">
		يمكنك التحكم فى التصنيفات من خلال هذه الصفحة<br>
		من الافضل اضافة التصنيف بكل اللغات
		</span>
		<span class="col-md-2 text-center">
			<button @click="showAddTag" class="btn btn-success pull-left">اضافة تصنيف</button>
		</span>
		
		<tags-table :tags="tags" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></tags-table>

        <v-paginator class="text-center" v-show="tags.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>
	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageTags.js') }}"></script>
@endsection