var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    open = require('gulp-open'),
    watch = require('gulp-watch'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

var config = {
  uri: 'http://localhost:3000',
  port: 3000,
  paths: {
    html: 'app/**/*.html',
    js: 'app/**/*.js',
    bootstrapper: 'app/bootstrapper.js',
    sass: 'app/**/*.scss',
    build: 'build'
  }
};

gulp.task('html', () => {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('js', () => {
  browserify(config.paths.bootstrapper)
    .transform(babelify, { presets: ["es2015", "react"] })
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('sass', () => {
  gulp.src(config.paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('start', () => {
  nodemon({
    script: 'index.js',
    ext: 'js html scss',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('open', ['start'], () => {
  gulp.src(config.paths.build)
    .pipe(open({uri: config.uri}));
});

gulp.task('build', ['html', 'js', 'sass']);

gulp.task('default', ['build', 'watch', 'open']);
