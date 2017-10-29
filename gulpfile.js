'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('connect', function () {
	connect.server(
	{
		root:'./public',
		livereload: true
	});
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function () {
	gulp.src('./public/*.html')
		.pipe(connect.reload());
});
gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['sass', 'sass:watch', 'connect']);
