var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./app/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([autoprefixer]))
	.pipe(gulp.dest('./app/css'));
});