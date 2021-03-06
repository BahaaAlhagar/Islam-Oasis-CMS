let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/admin/manageTags.js', 'public/js/admin')
	.js('resources/assets/js/admin/managePosts.js', 'public/js/admin')
	.js('resources/assets/js/admin/manageRecitations.js', 'public/js/admin')
	.js('resources/assets/js/admin/manageScholars.js', 'public/js/admin')
	.js('resources/assets/js/admin/manageQuran.js', 'public/js/admin')
	.js('resources/assets/js/admin/manageSeries.js', 'public/js/admin')
	.js('resources/assets/js/admin/manageItems.js', 'public/js/admin')
	.js('resources/assets/js/admin/manageFatwas.js', 'public/js/admin')
	.extract(['jquery', 'vue', 'toastr', 'axios']);
