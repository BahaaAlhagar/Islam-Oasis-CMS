@extends('layouts/adminPanel')


@section('title', 'ادارة التصنيفات')


@section('heading')
	ادارة التصنيفات
	<button class="btn btn-success pull-left" data-toggle="modal" data-target="#addTagModal">اضافة تصنيف</button>
@endsection


@section('content')
	<div id="manageTags">
		<table class="table table-responsive table-bordered text-center">
			<thead>
				<tr>
					@foreach(LaravelLocalization::getSupportedLocales() as $locale)
						<th>
							{{ $locale['native'] }}
						</th>
					@endforeach
				</tr>
			</thead>
			<tbody>
				<tr>
					@foreach($tags as $tag)
						@foreach($tag->translations as $translation)
							<td>{{ $translation->name }}</td>
						@endforeach
					@endforeach
				</tr>
			</tbody>
		</table>
	</div>
@endsection

@section('js')
	<script src="{{ mix('js/admin/manageTags.js') }}"></script>
@endsection