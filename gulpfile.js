var gulp = require('gulp');
var babel = require('gulp-babel');

//var typescript = require('gulp-typescript');
//var tsProject = typescript.createProject({});

gulp.task('phaser', function() {
    return gulp
        .src('node_modules/phaser/build/phaser.js')
        .pipe(gulp.dest('release/'));
});

var libDir = "lib/";
var jsFiles = "src/**/*.js";

gulp.task("babel", function() {
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(gulp.dest(libDir));
});

gulp.task("babel-watch", function() {
    gulp.watch(jsFiles, ["babel"]);
});

//gulp.task("babel"), function() {
//	// return gulp.src('lib/*.js')
//    .pipe(babel())
//    .pipe(gulp.dest('release'));
//});
//gulp.task('compile-scripts', function() {
    //return gulp
        //.src('lib/*.ts')
        //.pipe(typescript(tsProject))
        //.js.pipe(gulp.dest('release/'));
//});

gulp.task('watch', ['babel-watch'], function () {
    gulp.watch(jsFiles, ['babel-watch']);
});

//gulp.task('default', ['phaser']);

gulp.task('default', ['phaser', 'babel']);
