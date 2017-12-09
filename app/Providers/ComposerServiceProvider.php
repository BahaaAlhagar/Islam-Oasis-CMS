<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer(
            'FrontEnd/news/_sidebar', 'App\Http\ViewComposers\newsComposer'
            );

        view()->composer(
            'FrontEnd/lessons/_sidebar', 'App\Http\ViewComposers\lessonsComposer'
            );

        view()->composer(
            'FrontEnd/stories/_sidebar', 'App\Http\ViewComposers\storiesComposer'
            );

        view()->composer(
            'FrontEnd/fatawa/_sidebar', 'App\Http\ViewComposers\FatwaComposer'
            );
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
