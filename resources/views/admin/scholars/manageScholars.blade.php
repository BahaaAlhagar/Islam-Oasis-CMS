@extends('layouts/adminPanel')


@section('title', 'ادارة العلماء والقراء')


@section('heading')
	ادارة العلماء والقراء
@endsection


@section('content')
	<div id="manageScholars">
		<span class="col-md-10 text-center">
		يمكنك التحكم فى العلماء والقراء من خلال هذه الصفحة<br>
		من الافضل اضافة العالم بكل اللغات
		</span>
		<span class="col-md-2 text-center">
			<button @click="showAddTag" class="btn btn-success pull-left">اضافة عالم</button>
		</span>
		
		<!-- <scholars-table :scholars="scholars" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></scholars-table> -->

        <v-paginator class="text-center" v-show="scholars.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>
	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageScholars.js') }}"></script>
@endsection