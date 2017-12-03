// temporary

@foreach($tags as $tag)

{{$tag->news_count}} <br>

@endforeach


@foreach($randomArticles as $article)

{{$article->title}} <br>

@endforeach
