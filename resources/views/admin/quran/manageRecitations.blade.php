@extends('layouts/adminPanel')


@section('title', 'ادارة روايات القران الكريم')


@section('heading')
	ادارة روايات القران الكريم
@endsection


@section('content')
	<div id="manageRecitations">
		<span class="col-md-10 text-center">
		يمكنك التحكم فى روايات القران الكريم من خلال هذه الصفحة<br>
		من الافضل اضافة الرواية بكل اللغات
		</span>
		<span class="col-md-2 text-center">
			<button @click="showAddRecitation" class="btn btn-success pull-left">اضافة رواية</button>
		</span>
		
		<recitations-table :recitations="recitations" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></recitations-table>

        <v-paginator class="text-center" v-show="recitations.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>
	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageRecitations.js') }}"></script>
@endsection