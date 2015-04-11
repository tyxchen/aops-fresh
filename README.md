Fresh
=====

License
-------

Fresh is licensed under the [GNU GPL v2](http://www.gnu.org/licenses/gpl-2.0.html) or later. The Terms and Conditions of this license can be viewed by clicking the link.

Building
--------

This project is built with [Gulp](http://gulpjs.com).


First, clone this repository:

	$ mkdir fresh
	$ cd fresh/
	$ git clone https://github.com/tyxchen/aops-fresh.git .

Now, install Gulp:

	$ [sudo] npm install -g gulp

After this, install the necessary Gulp plugins:

	$ npm install gulp gulp-autoprefixer gulp-rename gulp-ruby-sass gulp-sourcemaps

You can now run Gulp.

	$ gulp
	[13:30:47] Using gulpfile ~/Documents/fresh/Gulpfile.js
	[13:30:47] Starting 'build:sass'...
	[13:30:47] Starting 'watch'...
	[13:30:47] Finished 'watch' after 19 ms
	[13:30:48] Finished 'build:sass' after 751 ms
	[13:30:48] Starting 'default'...
	[13:30:48] Finished 'default' after 5.09 μs
