var gulp = require('gulp'),
useref = require('gulp-useref'),
gulpIf = require('gulp-if'),
imageMin = require('gulp-imagemin'),
cssNano = require('gulp-cssnano'),
cache = require('gulp-cache'),
del = require('del'),
runSequence = require('run-sequence');



gulp.task('useref', function(){
	console.log("running useref");
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.css', cssNano()))
	.pipe(gulp.dest('docs'))
});


gulp.task('imageMin', function(){
	console.log("Optimizing Images");
	return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imageMin({
		interlaced:true
	})))
	.pipe(gulp.dest('docs/img'))
});


// gulp.task('fonts', function(){
// 	console.log("Moving fonts");
// 	return gulp.src('app/fonts/**/*')
// 	.pipe(gulp.dest('docs/fonts'))
// });


gulp.task('clean:docs', function(){
	console.log("Deleting Old files");
	return del.sync('docs');
});


gulp.task('build', function(callback){
	console.log("Building assets");
	runSequence('clean:docs',
		['useref', 'imageMin'],
		callback);
});