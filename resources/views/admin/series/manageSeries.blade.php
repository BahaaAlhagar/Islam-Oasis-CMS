@extends('layouts/adminPanel')


@section('title', 'ادارة المجموعات والمسلسلات')


@section('heading')
	ادارة المجموعات والمسلسلات
@endsection


@section('content')
	<div id="manageSeries">
		<span class="col-md-10 text-center">
		يمكنك التحكم فى المجموعات والمسلسلات من خلال هذه الصفحة<br>
		يتم استخدام المجموعات فى ترتيب ملفات الميديا و الكتب<br>
		تأكد من اضافة المجموعة باللغة لافتراضية ليتم الوصول اليها فى لوحة التحكم<br>
		عرض 
			<select v-model="current_view" @change="refetchData()">
				<option value="">الكل</option>
			    <option value="1">مجموعات الكتب</option>
			    <option value="2">مجموعات الاناشيد</option>
			    <option value="3">مجموعات الفيديو</option>
			    <option value="4">مجموعات المحاضرات الصوتية</option>
			    <option value="5">مجموعات الادعية</option>    
			</select>
		</span>
		<span class="col-md-2 text-center">
			<button @click="addSeries()" class="btn btn-success pull-left">اضافة مجموعة</button>
		</span>
		
		<series-table :series="series" :scholars="scholars" :tags="tags"  :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></series-table>

        <v-paginator class="text-center" v-show="series.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>
	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageSeries.js') }}"></script>
@endsection