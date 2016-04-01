var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    coffee = require('gulp-coffee'),
    useref = require('gulp-useref'),
    livereload = require('gulp-livereload'),
    gulpIf = require('gulp-if')
    htmlmin = require('gulp-htmlmin'),
    responsive = require('gulp-responsive-images');


livereload({ start: true });


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

            '*.jpg': [
                {
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

            '*.png': [
                {
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
                }]

        }))
        .pipe(gulp.dest('dist/images'));

});

gulp.task('watch', function() {
    
    livereload.listen();
    
    gulp.watch('js/**/*.js', ['useref']);
    gulp.watch('css/**/*.css', ['useref']);
    gulp.watch('images/**/*', ['responsive']);
    gulp.watch('fonts/**/*', ['fonts']);
    gulp.watch('*.html', ['htmlmin']);
});

//gulp.task('default', ['fonts', 'useref', 'htmlmin', 'responsive', 'images','watch']);

gulp.task('default', ['fonts', 'useref', 'responsive', 'images']);