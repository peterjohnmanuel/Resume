var gulp = require('gulp');
// uglify = require('gulp-uglify'),
// rename = require('gulp-rename'),
// minifyCSS = require('gulp-clean-css'),
// concat = require('gulp-concat'),
// plumber = require('gulp-plumber'),
// coffee = require('gulp-coffee'),
// useref = require('gulp-useref'),
// gulpIf = require('gulp-if'),
// htmlmin = require('gulp-htmlmin'),
// responsive = require('gulp-responsive-images');

var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var del = require('del');

var browserSync = require('browser-sync').create();


var path = {
    bootstrap: './bower_components/bootstrap-sass/',
    css: 'css/',
    dist: './dist/',
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



// gulp.task('scripts', function() {
//     gulp.src('js/**/*.js')
//         .pipe(plumber())
//         .pipe(coffee())
//         .pipe(concat('app.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js/'))
//         .pipe(livereload());
// });


// gulp.task('styles', function() {
//     gulp.src('css/**/*.css')
//         .pipe(plumber())
//         .pipe(coffee())
//         .pipe(concat('main.min.css'))
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('dist/css/'))
//         .pipe(livereload());
// });

gulp.task('fonts', function() {
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
    gulp.src('images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('useref', function() {
    gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlmin', function() {
    gulp.src('dist/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('responsive', function() {
    gulp.src('images/**/*')
        .pipe(responsive({

            '*.jpg': [{
                    width: 1600,
                    suffix: '-XL',
                    quality: 100
                },
                {
                    width: 1200,
                    suffix: '-L',
                    quality: 100
                },
                {
                    width: 800,
                    suffix: '-M',
                    quality: 100
                },
                {
                    width: 400,
                    suffix: '-S',
                    quality: 40
                },
                {
                    width: 40,
                    suffix: '-Logo',
                    quality: 100
                },
                {
                    width: 758,
                    height: 60,
                    suffix: '-Banner',
                    quality: 100
                }

            ],

            '*.png': [{
                    width: 1600,
                    suffix: '-XL',
                    quality: 100
                },
                {
                    width: 1200,
                    suffix: '-L',
                    quality: 100
                },
                {
                    width: 800,
                    suffix: '-M',
                    quality: 100
                },
                {
                    width: 400,
                    suffix: '-S',
                    quality: 40
                },
                {
                    width: 40,
                    suffix: '-Logo',
                    quality: 100
                },
                {
                    width: 758,
                    height: 60,
                    suffix: '-Banner',
                    quality: 100
                }
            ]

        }))
        .pipe(gulp.dest('dist/images'));

});

gulp.task('watch', ['browser-sync'], function() {

    //gulp.watch(path.src + 'js/**/*.js', ['useref']).on('change', browserSync.reload);
    gulp.watch(path.src + 'js/**/*.js').on('change', browserSync.reload);
    //gulp.watch(path.src + 'css/**/*.css').on('change', browserSync.reload);;
    gulp.watch(path.src + path.sass, ['sass']).on('change', browserSync.reload);;
    gulp.watch(path.src + 'images/**/*', ['responsive']).on('change', browserSync.reload);;
    gulp.watch(path.src + 'fonts/**/*', ['fonts']).on('change', browserSync.reload);;
    gulp.watch(path.src + '*.html').on('change', browserSync.reload);;
});

gulp.task('prod', function(){

    del(path.dist + "**/*");
});

gulp.task('default', ['fonts', 'useref', 'responsive', 'images']);

gulp.task('responsive', ['responsive']);