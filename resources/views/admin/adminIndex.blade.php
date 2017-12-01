@extends('layouts/adminPanel')

@section('title', 'الرئيسية')

@section('heading')
الرئيسية
@endsection

@section('content')
مرحبا بك فى لوحة التحكم.
@endsection

@section('js')
	<script src="{{ URL::asset('js/bootstrap.min.js') }}"></script>
@endsection