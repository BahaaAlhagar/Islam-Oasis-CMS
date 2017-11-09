@extends('layouts/adminPanel')


@section('title', 'ادارة التصنيفات')


@section('heading')
	ادارة التصنيفات
	<button class="btn btn-success pull-left" data-toggle="modal" data-target="#addTagModal">اضافة تصنيف</button>
@endsection


@section('content')
	<div id="manageTags">
		<tags-table :tags="tags" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></tags-table>

        <v-paginator class="text-center" v-show="tags.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>
	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageTags.js') }}"></script>
@endsection