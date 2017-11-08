<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - لوحة التحكم - @yield('title')</title>

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
        <nav class="navbar navbar-inverse navbar-static-top">
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
                <div id="admin_content" class="col-md-8">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            @yield('heading')
                        </div>
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

    <script type="text/javascript">
        jQuery(function($) {
         var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
         $('ul a').each(function() {
          if (this.href === path) {
           $(this).addClass('active');
          }
         });
        });
    </script>

    @yield('js')

    <div id="footer_container">
    @yield('footer')
        <footer class="footer print-hidden">
          <b>&copy; Copyright 2017 by <a href="#aboutModal" data-toggle="modal" data-target="#aboutDeveloperModal">Bahaa Alhagar</a>.</b>

              <!-- about developer modal -->
              <div class="modal fade" id="aboutDeveloperModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h4 class="modal-title" id="myModalLabel">عن المبرمج</h4>
                            </div>
                        <div class="modal-body">
                            <center>
                            <img src="{{ Storage::url('pic.jpg') }}" name="aboutme" width="140" height="140" border="0" class="img-circle"></a>
                            <h3 class="media-heading"><b>Bahaa Alhagar</b></h3>
                            <span class="social-icons">
                            <a href="https://github.com/BahaaAlhagar" target="_blank">
                                <li class="fa fa-github-alt git"></li>
                            </a>
                            <a href="https://twitter.com/bahaa_alhagar" target="_blank">
                              <li class="twitter fa fa-twitter"></li>
                            </a>
                            <a href="https://www.facebook.com/BahaaAlhagar14" target="_blank">
                              <li class="facebook fa fa-facebook"></li>
                            </a>
                            </span>
                              
                            </center>
                            <hr>
                            <center>
                            <p id="biography" class="text-right"><strong>السيرة الذاتية: </strong><br>
                                بهاء الحجر, من مصر, مطور تطبيقات ويب.<br>
                                مهتم بتطوير مواقع الانترنت و كل ما يخص الحاسوب.
                                </p>
                            </center>
                        </div>
                        <div class="modal-footer">
                            <center>
                            <button type="button" class="btn btn-default" data-dismiss="modal">اغلاق</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
