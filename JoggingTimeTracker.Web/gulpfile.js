/// <vs BeforeBuild='webpack' />
'use strict';

var path = require('path'),
    gulp = require('gulp'),
    webpack = require('gulp-webpack-build');

var src = './app',
    // The destination is the project root folder as the final destination is configured 
    // in the webpack.config file
    dest = '.',
    watchDest = './JoggingTimeTracker.Web',
    webpackOptions = {
      debug: true,
      devtool: '#source-map',
      watchDelay: 200
    },
    webpackConfig = {
      useMemoryFs: true,
      progress: true
    },
    CONFIG_FILENAME = webpack.config.CONFIG_FILENAME;

gulp.task('webpack', [], function () {
  //return gulp.src(path.join(src, '**', CONFIG_FILENAME), { base: path.resolve(src) })
  return gulp.src(path.join(CONFIG_FILENAME))
      .pipe(webpack.init(webpackConfig))
      .pipe(webpack.props(webpackOptions))
      .pipe(webpack.run())
      .pipe(webpack.format({
        version: false,
        timings: true
      }))
      .pipe(webpack.failAfter({
        errors: true,
        warnings: true
      }))
      .pipe(gulp.dest(dest));
});

gulp.task('watch', ['webpack'], function () {
  gulp.watch(path.join(src, '**/*.*')).on('change', function (event) {
    if (event.type === 'changed') {
      gulp.src(event.path, { base: path.resolve(src) })
          .pipe(webpack.closest(CONFIG_FILENAME))
          .pipe(webpack.init(webpackConfig))
          .pipe(webpack.props(webpackOptions))
          .pipe(webpack.watch(
              function (err, stats) {
                gulp.src(this.path, { base: this.base })
                    .pipe(webpack.proxy(err, stats))
                    .pipe(webpack.format({
                      verbose: true,
                      version: false
                    }))
                    .pipe(gulp.dest(watchDest));
              }
          ));
    }
  });
});