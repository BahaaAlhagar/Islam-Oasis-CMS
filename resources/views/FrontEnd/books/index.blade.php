@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.books') }}
@endsection

@section('content')


			@foreach($books as $book)

				<div class="col-md-6 text-center">
					<div>
						<a href="{{ route('books.show', $book->slug) }}">
							@if($book->photo)
		                		<img src="{{ Storage::url($book->photo->url) }}" width="250" height="250" border="1" alt="{{ $book->name }}">
		                	@elseif($book->series->photo)
		                		<img src="{{ Storage::url($book->series->photo->url) }}" width="250" height="250" border="1" alt="{{ $book->name }}">
		                	@else
		                		<img src="{{ Storage::url('item.png') }}" width="250" height="250" border="1" alt="{{ $book->name }}">
		                	@endif
		                </a>
	                </div>
	                <div>
	                	<a href="{{ route('books.show', $book->slug) }}">
	                		{{ $book->name }}
	                	</a>
	                </div>
				</div>
	            
			@endforeach

			{{ $books->links() }}

@endsection

@section('sidebar')
	
@endsection
