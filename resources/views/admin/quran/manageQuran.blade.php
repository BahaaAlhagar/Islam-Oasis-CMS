@extends('layouts/adminPanel')

@section('title', 'ادارة سور القران الكريم')


@section('heading')
	ادارة سور القران الكريم
@endsection


@section('content')
	<div id="manageQuran">

		
		<span class="col-md-10 text-center">
			عرض 
			<select v-model="current_view" @change="refetchData()">
				<option value="">الكل</option>
			    <option v-for="scholar in scholars" :value="scholar.scholar_id">@{{ scholar.name }}</option>
			</select>
		</span>


		<span class="col-md-2 text-center">
			<button @click="addQuran()" class="btn btn-success pull-left">اضافة سورة قران كريم</button>
		</span>


		<!-- <qurans-table :qurans="qurans" :scholars="scholars" :recitations="recitations" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></qurans-table> -->

        <v-paginator class="text-center" v-show="qurans.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator>

	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageQuran.js') }}"></script>
@endsection