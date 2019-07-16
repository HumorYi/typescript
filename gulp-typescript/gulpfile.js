/*
// node.js version
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
*/

// browserify version
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

// Watchify
var watchify = require("watchify");
var fancy_log = require('fancy-log');

// Uglify
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

// Babel

var paths = {
  pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: ['src/main.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify));

var copyHtml = function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest("dist"));
};

gulp.task("copy-html", copyHtml);

var bundle = function () {
  return watchedBrowserify
      .transform('babelify', {
          presets: ['es2015'],
          extensions: ['.ts']
      })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest("dist"));
}

gulp.task("default", gulp.series(gulp.parallel(copyHtml), bundle));

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);