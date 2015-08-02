'use strict';

var gulp        = require('gulp'),
	concat      = require('gulp-concat'),
	minify		= require('gulp-uglify'),
	rename 		= require('gulp-rename'),
	maps 		= require('gulp-sourcemaps'),
	pages		= require('gulp-gh-pages');

	gulp.task('gulpConcat',function () {
		return gulp.src([ 	// !important return -- wait for the other task to finish
			"js/jquery.fancybox.js",
			"js/Chart.min.js",
			"js/js.js",
			"js/wow.min.js",
			"js/animation.js",
			"js/menu.js",
			"js/fancy.js",
			"js/find.js",])
		.pipe(maps.init())//Source map
		.pipe(concat("app.js"))
		.pipe(maps.write('./'))
		.pipe(gulp.dest("js"));
	})

	gulp.task('gulpmini', ['gulpConcat'] ,function(){
		gulp.src('js/app.js')
		.pipe(minify())
		.pipe(rename('app.min.js'))// rename task
		.pipe(gulp.dest('js'));
	})

	gulp.task('build',['gulpmini'], function(){
		return gulp.src(['css/**.css', 'js/**/**.js','index.html', 'about.html', 'find.html', 'images/**', 
						'fonts/**', 'fancy/**'], {base:'./'})
		.pipe(gulp.dest('dist'));//send the files to dist
	});

	gulp.task('deploy', function(){
		return gulp.src("./dist/**/*")
		.pipe(pages());
	})

	gulp.task('default',['build']); //gulp run all the task