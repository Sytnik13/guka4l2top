var gulp = require('gulp'),
    cleanCss = require('gulp-clean-css'),
    less = require('gulp-less');

gulp.task('default', function () {
    gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(cleanCss())

});

gulp.task('watch',function () {
    gulp.watch('less/main.less', ['default'])
});
