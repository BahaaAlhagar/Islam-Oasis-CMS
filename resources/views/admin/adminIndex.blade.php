@extends('layouts/adminPanel')

@section('title', 'الرئيسية')

@section('heading')
الرئيسية
@endsection

@section('content')
مرحبا بك فى لوحة التحكم.

@foreach($supportedLocales as locale)
{{ $locale }}<br>
@end
@endsection