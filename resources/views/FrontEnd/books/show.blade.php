@extends('FrontEnd/layouts/default')


@section('title')
	 - {{ __('navbar.books') }} - {{ $book->name }}
@endsection

@section('content')
				<div class="panel panel-default">
	                <div class="panel-heading">
		            	<a href="{{ route('books.show', $book->slug) }}">
		            		{{ $book->name }}
		            	</a>
		            
		            	<p class="blog-post-meta">{{ Date::parse($book->created_at)->diffForHumans() }}</p>
	                </div>
	                <div class="panel-body col-md-12">
	                	
	                	<div class="text-center">
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

	                	<div class="col-md-12 text-center">
	                		<table class="table-striped table-bordered">
		                		<tbody>
		                			<tr>
					                  <th><strong>اسم الكتاب</strong></th>
					                  <td>
						                  <a href="{{ route('books.show', $book->slug) }}">
						                  	{{ $book->name }}
						                  </a>
						              </td>
					                </tr>
					                <tr>
					                  <th><strong>مؤلفى الكتاب</strong></th>
					                  <td>
					                  		@if(count($book->scholars))
					                  			@foreach($book->scholars as $scholar)
					                  				{{ $scholar->translate(app()->getLocale())->name }}
					                  			@endforeach
					                  		@elseif(count($book->series->scholars))
					                  			@foreach($book->series->scholars() as $scholar)
					                  				{{ $scholar->translate(app()->getLocale())->name }}
					                  			@endforeach
					                  		@endif
						              </td>
					                </tr>
					                @if($book->description)
						                <tr>
						                  <th><strong>وصفه</strong></th>
						                  <td>
							                  	{{ $book->description }}
							              </td>
						                </tr>
					                @endif
					                <tr>
					                  <th><strong>لغة الكتاب</strong></th>
					                  <td>
						                  {{ $book->language }}
						              </td>
					                </tr>
					                @if($book->series)
						                <tr>
						                  <th><strong>مجموعة الكتاب</strong></th>
						                  <td>
							                  	{{ $book->series->name }}
							              </td>
						                </tr>
					                @endif
		                		</tbody>
		                	</table>
	                	</div>
	                	


	                	<div class="addthis_inline_share_toolbox pull-left"></div>

		        		<br><hr>
		        		@if(count($book->tags()))
						    <div class="tags-list">
						    	@foreach($book->tags as $tag)
						    		<li><a href="{{ route('booksTag.show', $tag->slug) }}">{{ $tag->name }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag->books_count }}</button></a></li>
								@endforeach
							</div>
						@elseif(count($book->series->tags()))
							<div class="tags-list">
						    	@foreach($book->series->tags as $tag)
						    		<li><a href="{{ route('booksTag.show', $tag->slug) }}">{{ $tag->name }} <button type="button" class="btn btn-warning btn-round-xs btn-xs"> {{ $tag->books_count }}</button></a></li>
								@endforeach
							</div>
						@endif
	                </div>
	            </div>
				

		        

		        
@endsection

@section('sidebar')
	
@endsection
