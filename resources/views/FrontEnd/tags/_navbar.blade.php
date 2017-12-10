    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
        <a class="blog-nav-item" href="{{ route('newsTag.show', $tag->slug) }}">{{ __('navbar.news') }}</a>
        <a class="blog-nav-item" href="{{ route('lessonsTag.show', $tag->slug) }}">{{ __('navbar.lessons') }}</a>
        <a class="blog-nav-item" href="{{ route('storiesTag.show', $tag->slug) }}">{{ __('navbar.stories') }}</a>
        <a class="blog-nav-item" href="{{ route('fatawaTag.show', $tag->slug) }}">{{ __('navbar.fatwa') }}</a>
        <a class="blog-nav-item" href="{{ route('faqTag.show', $tag->slug) }}">{{ __('navbar.faq') }}</a>
        </nav>
      </div>
    </div>