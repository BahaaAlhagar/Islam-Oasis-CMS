<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - لوحة التحكم</title>

    <!-- Styles -->
    <!-- font awesome -->
    <link rel="stylesheet" href="{{ URL::asset('css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap_rtl.css') }}">

    <link rel="stylesheet" href="{{ URL::asset('css/adminboard.css') }}">

    @yield('css')
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'Laravel') }}
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-left">

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                                    <b>{{ Auth::user()->name }}</b> <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    @include('admin/adminNav')
                </div>
                <div class="col-md-8">
                    <div class="panel panel-default">
                      <div class="panel-body">
                            @yield('content')
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>

    <!-- Scripts -->
    <!--[if lt IE 9]>
    <script src="{{ URL::asset('js/html5shiv.min.js') }}"></script>
    <![endif]-->
    
    <script src="{{ URL::asset('js/respond-1.4.2.min.js') }}"></script>

    <!-- jquery & bootstrap requirements -->
    <script src="{{ URL::asset('js/jquery-2.1.4.min.js') }}"></script>
    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="{{ URL::asset('js/ie10-viewport-bug-workaround.js') }}"></script>

    <script src="{{ URL::asset('js/bootstrap.min.js') }}"></script>


    <!-- webpack vendor packages -->
<!--     <script src="{{ URL::asset('js/manifest.js') }}"></script>
    <script src="{{ URL::asset('js/vendor.js') }}"></script> -->

    @yield('js')
</body>
</html>
