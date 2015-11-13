var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webpack = require('webpack-stream');
var staticHash = require('gulp-static-hash');
var uglify = require('gulp-uglify');
var cordova = require('cordova');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');

// testing
var browserSync = require("browser-sync"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream");

var tasks = {
  webpack: function() {
    return gulp.src('./www/js/index.jsx')
      .pipe(webpack(require('./webpack.config')))
      .pipe(gulp.dest('./www/js/'))
  }
}

gulp.task('webpack', tasks.webpack)

gulp.task('livereload', function() {
  var stream = tasks.webpack()
  var platforms = require('./platforms/platforms.json')
  for (var platform in platforms) {
    stream = stream.pipe(gulp.dest('./platforms/' + platform + '/www/js'))
  }
  return stream.pipe(livereload())
})

gulp.task('watch', ['serve'], function() {
  livereload.listen({port: 35729})
  gulp.watch('./www/js/**/*.jsx', ['livereload'])
})

gulp.task('build', function(cb) {
    return runSequence('webpack', 'uglify', 'hash')
})

gulp.task('prepare', function(cb) {
    return cordova.prepare(cb)
})

gulp.task('serve', function(cb) {
    return cordova.serve(cb)
})

gulp.task('hash', function() {
    return gulp.src(['www/*.html'])
        .pipe(staticHash({asset: 'www/js'}))
        .pipe(gulp.dest('www'));
});

gulp.task('uglify', function () {
    return gulp.src(['www/js/**/*.js'])
        .pipe(uglify({
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        }))
        .pipe(gulp.dest('www/js'));
});

gulp.task('clean', function(cb) {
    return rimraf('./platforms/**/www/js/**/*.jsx', cb)
})

gulp.task('install', function(cb) {
    return cordova.platform('add', ['browser', 'ios', 'android'], cb)
})

// testing

gulp.task("browser-sync", function () {
    "use strict";
    browserSync({
        server: {
            //serve tests and the root as base dirs
            baseDir: ["./test/", "./"],
            //make tests.html the index file
            index: "tests.html"
        }
    });
});

gulp.task("browserify", function() {
    "use strict";
    return browserify("./test/tests.js")
        .bundle()
        .on("error", function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(source("tests-browserify.js"))
        .pipe(gulp.dest("test/"))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task("serve", ["browserify", "browser-sync"], function () {
    "use strict";
    //when tests.js changes, browserify code and execute tests
    gulp.watch(["test/tests.js", "src/text-changer.js"], ["browserify", "test"]);
});
