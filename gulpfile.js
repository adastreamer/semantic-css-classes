var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var karmaServer = require('karma').Server;

gulp.task('default', function() {
  gutil.log('Nothing to do here!');
});

gulp.task('sass', function () {
  return gulp.src('./sass/index.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('semantic-css-classes.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./bin'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('test', function (done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
