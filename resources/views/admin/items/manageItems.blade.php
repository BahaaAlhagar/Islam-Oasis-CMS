@extends('layouts/adminPanel')


@section('title', 'ادارة ملفات الميديا و الكتب')


@section('heading')
	ادارة ملفات الميديا و الكتب
@endsection


@section('content')
	<div id="manageItems">
		<span class="col-md-10 text-center">
		يمكنك التحكم فى ملفات الميديا و الكتب من خلال هذه الصفحة<br>
		عرض 
			<select v-model="current_view" @change="refetchData()">
				<option value="">الكل</option>
			    <option value="1">الكتب</option>
			    <option value="2">الاناشيد</option>
			    <option value="3">الفيديو</option>
			    <option value="4">المحاضرات الصوتية</option>
			    <option value="5">الادعية</option>
			</select>
		</span>
		<span class="col-md-2 text-center">
			<button @click="addSeries()" class="btn btn-success pull-left">اضافة ملف او كتاب</button>
		</span>
		
		<!-- <series-table :series="series" :scholars="scholars" :tags="tags"  :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></series-table> -->

        <!-- <v-paginator class="text-center" v-show="series.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator> -->
	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageItems.js') }}"></script>
@endsection