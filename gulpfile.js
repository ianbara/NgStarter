//https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development#features-of-browsersync

var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        //proxy: "localhost:8080" // makes a proxy for localhost:8080
        //ws: true // enables websockets
        
    });
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});