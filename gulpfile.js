const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//cocmpile scss to css 

function style(){
    //src css file
    return gulp.src('./scss/**/*.scss')
    //pass that file through sass compiler
    .pipe(sass())
    //saving css files 
    .pipe(gulp.dest('./css'))
    //stream to all browsers 
    .pipe(browserSync.stream());
}

function watch (){
    gulp.watch('./scss/**/*.scss', style);
   // gulp.watch('./*html').on('change', browserSync.reload);
   // gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;