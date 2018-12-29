'use strict';

const fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var postcssCritical = require('postcss-critical-split');
var replace = require('gulp-replace');
var nanocss = require('cssnano');
var htmlmin = require('gulp-htmlmin');
var cachebust = require('gulp-cache-bust');

gulp.task('connect', function () {
	connect.server(
	{
		root:'./public',
		livereload: true
	});
});
// PostCss
gulp.task('criticalCss', function () {
    var processors = [
        postcssCritical({
            'output': 'critical',
        }),
        nanocss(),
    ];
    return gulp.src('./src/sass/style.scss')
    .pipe(sass({outputStyle: 'expanded',
    })
    .on('error', sass.logError))
    .pipe( postcss(processors))
    .pipe(gulp.dest('./public/css/critical/'));
});
gulp.task('bundleHtml',['criticalCss'], function () {
    return gulp.src('./src/index.html')
        // .pipe(rigger())
        .pipe(replace(/<style><\/style>/, function(s) {
            var style = fs.readFileSync('./public/css/critical/style.css', 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
		.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('sass',['bundleHtml'], function () {
    var processors = [
        postcssCritical({
            'output': 'rest',
        }),
        nanocss(),
    ];
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe( postcss(processors))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function () {
	gulp.src('./public/*.html')
		.pipe(connect.reload());
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        },
        open: false
    });
});
gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done();
});
gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./public/**/*', ['bs-reload']);
});

gulp.task('default', ['sass', 'sass:watch', 'browser-sync']);
