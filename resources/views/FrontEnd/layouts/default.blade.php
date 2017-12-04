<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }} @yield('title')</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link rel="stylesheet" href="{{ URL::asset('css/ie10-viewport-bug-workaround.css') }}">

    <!-- Custom styles for this template -->
    <link rel="stylesheet" href="{{ URL::asset('css/layouts/default.css') }}">

    <!-- rtl css files -->
    @if(LaravelLocalization::getCurrentLocaleDirection() == 'rtl')
      <link rel="stylesheet" href="{{ URL::asset('css/bootstrap_rtl.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/layouts/default_rtl.css') }}">
    @endif


    @yield('css')
  </head>

  <body>

    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title">{{ __('messages.title') }}</h1>
        <p class="lead blog-description">{{ __('messages.description') }}</p>
      </div>
    </div>

    <div>
      @include('FrontEnd/layouts/partials/navbar')
    </div>

    <div class="container">
      <div class="row">

        <div class="col-sm-8 blog-main">

        @yield('content')
        
        </div><!-- /.blog-main -->

        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          @yield('sidebar')
          <div class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </div><!-- /.container -->

    <footer class="blog-footer">
      <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>


    <!-- Scripts -->
    <!--[if lt IE 9]>
    <script src="{{ URL::asset('js/html5shiv.min.js') }}"></script>
    <![endif]-->
    
    <script src="{{ URL::asset('js/respond-1.4.2.min.js') }}"></script>

    <!-- jquery & bootstrap requirements -->
    <script src="{{ URL::asset('js/jquery-2.1.4.min.js') }}"></script>
    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="{{ URL::asset('js/ie10-viewport-bug-workaround.js') }}"></script>

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

  </body>
</html>
