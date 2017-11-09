<?php

namespace App\Http\Middleware;

use Closure;

class adminPanelDefaultLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }

    // set the locale to arabic after response
    public function terminate($request, $response)
    {
        app()->setLocale('ar');
    }
}
