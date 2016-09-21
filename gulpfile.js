var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var useref = require('gulp-useref');
var htmlmin = require('gulp-htmlmin');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var del = require('del');

var browserSync = require('browser-sync').create();

var path = {
    bootstrap: './bower_components/bootstrap-sass/',
    css: 'css/',
    dist: './dist/',
    fonts: 'fonts/',
    sass: 'scss/**/*.scss',
    src: './src/'
};

/** Sass  */
gulp.task('sass', function() {
    gulp.src(path.src + path.sass)
        .pipe(plumber())
        .pipe(sass({ includePaths: [path.bootstrap + 'assets/stylesheets'] }))
        .pipe(gulp.dest(path.src + path.css))
        .pipe(browserSync.reload({ stream: true }));
});

/** Browser Sync */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: path.src
        }
    });
});


gulp.task('fonts', function() {
    gulp.src(path.src + path.fonts + '**/*')
        .pipe(gulp.dest( path.dist +  path.fonts));
});


gulp.task('useref', function() {
    gulp.src(path.src + '*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest(path.dist));
});

gulp.task('htmlmin', function() {
    gulp.src(path.dist + '*.html')
        .pipe(htmlmin({ collapseWhitespace: true }));
        //.pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(path.src + 'js/**/*.js').on('change', browserSync.reload);
    gulp.watch(path.src + path.sass, ['sass']).on('change', browserSync.reload);
    gulp.watch(path.src + 'fonts/**/*', ['fonts']).on('change', browserSync.reload);
});

/** Delete */
gulp.task('delete', function(){
    del(path.dist + "**/*");
});


/** Production */
gulp.task('prod', ['delete', 'useref', 'fonts']);