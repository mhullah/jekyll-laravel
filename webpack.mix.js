let mix = require('laravel-mix'), fs = require('fs-extra');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('_site')
   .js('_resources/js/app.js', 'js')
   .sass('_resources/sass/app.scss', 'css')
   .then(() => fs.copy('_site/mix-manifest.json', '_data/mix-manifest.json'));
