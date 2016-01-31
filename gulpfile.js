var gulp = require('gulp');
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject({});

gulp.task('phaser', function() {
    return gulp
        .src('node_modules/phaser/build/phaser.js')
        .pipe(gulp.dest('release/'));
});

gulp.task('compile-scripts', function() {
    return gulp
        .src('lib/*.ts')
        .pipe(typescript(tsProject))
        .js.pipe(gulp.dest('release/'));
});

gulp.task('watch', ['compile-scripts'], function () {
    gulp.watch('lib/*.ts', ['compile-scripts']);
});

gulp.task('default', ['phaser', 'compile-scripts']);