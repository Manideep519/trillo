var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/sass/**/*.scss', function() {
    gulp.start('cssInject');
    browserSync.reload();
  });

});

gulp.task('cssInject', ['sass'], function() {
  return gulp.src('./app/css/main.css')
    .pipe(browserSync.stream());
});

