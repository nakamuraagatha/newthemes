// grab our gulp packages
var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('./assets/scss/bloggy.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});


gulp.task('scripts', function(){
    return gulp.src(['assets/js/src/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('icons', function() {
    return gulp.src('assets/scss/assets/vendor/font-awesome/fonts/**.*')
        .pipe(gulp.dest('assets/fonts'));
});


// create a default task and just log a message
gulp.task('default', ['sass', 'scripts', 'icons'], function() {
  //do stuff after 'mytask' is done.
});

