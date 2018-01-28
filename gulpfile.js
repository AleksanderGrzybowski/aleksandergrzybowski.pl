const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('compileLess', () =>
  gulp.src('./assets/less/styles.less')
    .pipe(less({}))
    .pipe(gulp.dest('./assets/css'))
);

gulp.task('watchLess', () => gulp.watch('./assets/less/*.less', ['compileLess']));

gulp.task('browserSync', () => {
    browserSync.init({
        server: {baseDir: "./"},
        files: ['./*.html', './assets/css/*.css', 'assets/js/*.js', 'assets/images/*.png']
    });
});

gulp.task('default', ['watchLess', 'browserSync']);
gulp.task('build', ['compileLess']);
