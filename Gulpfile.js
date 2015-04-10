/**
 * Gulpfile.js
 */

/* jshint node:true */

'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    auto = require('gulp-autoprefixer'),
    maps = require('gulp-sourcemaps'),
    name = require('gulp-rename');

/**
 * Tasks
 */

// Build

gulp.task('build:sass', function () {
  return sass('src/main.scss', {sourcemap: true, style: 'expanded'})
    .on('error', function (e) { console.error(e.message); })
    .pipe(maps.write({sourceRoot: './'}))
    .pipe(name({basename: 'fresh'}))
    .pipe(gulp.dest('build/'));
});


// Default

gulp.task('default', ['build:sass', 'watch']);

// Watch

gulp.task('watch', function () {
  gulp.watch(['src/**/*.scss', 'src/main.scss'], ['build:sass']);
});

