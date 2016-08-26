var gulp = require('gulp'),
    cleanCss = require('gulp-clean-css'),
    less = require('gulp-less');

gulp.task('default', function () {
    gulp.src('less/addserver.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(cleanCss())
    gulp.src('less/admin.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(cleanCss())
    gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(cleanCss())
    gulp.src('less/adv.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(cleanCss())

});

gulp.task('watch',function () {
    gulp.watch('less/addserver.less', ['default']);
    gulp.watch('less/admin.less', ['default']);
    gulp.watch('less/main.less', ['default']);
    gulp.watch('less/adv.less', ['default'])
});
