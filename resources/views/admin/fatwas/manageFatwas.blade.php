@extends('layouts/adminPanel')


@if($type == 1)
	@section('title', 'ادارة الفتاوى')
@elseif($type == 2)
	@section('title', 'ادارة الاسئلة الشائعة')
@endif


@section('heading')

	@if($type == 1)
		ادارة الفتاوى
	@elseif($type == 2)
		ادارة الاسئلة الشائعة
	@endif

@endsection


@section('content')
	<div id="manageFatwas">

		
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
				<button @click="addFatwa" class="btn btn-success pull-left">اضافة فتوى</button>
			</span>
		@elseif($type == 2)
			<span class="col-md-2 text-center">
				<button @click="addFatwa" class="btn btn-success pull-left">اضافة سؤال</button>
			</span>
		@endif	

		<!-- <fatwas-table :type="{{ $type }}" :fatwas="fatwas" :locales="{{ json_encode(LaravelLocalization::getSupportedLocales()) }}"></fatwas-table> -->

        <!-- <v-paginator class="text-center" v-show="fatwas.length" :options="options" ref="VP" :resource_url="resource_url" @update="updateResource"></v-paginator> -->

	</div>

@endsection

@section('js')
	<script src="{{ mix('js/admin/manageFatwas.js') }}"></script>
@endsection