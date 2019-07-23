var gulp = require('gulp');
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin');

gulp.task('styles', function() {
    gulp.src('src/assets/css/*.css')
        .pipe(minifyCSS({ keepBreaks: true }))
        .pipe(gulp.dest('src/assets/sass'))
});
gulp.task('scripts', function() {
    gulp.src('src/assets/js/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/assets/js'))
});
gulp.task('image', () =>
    gulp.src('src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/img'))
);
