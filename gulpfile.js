var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

var paths = {
    sass: ['./app/index.scss'],
    js: ['./app/popup.js', './app/generators/*.js']
};

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(rename('index.dist.css'))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(concat('index.dist.js'))
        .pipe(gulp.dest('./app/dist')); 
});

gulp.task('watch', ['sass', 'js'], function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['js']);
});