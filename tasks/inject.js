'use strict';

/**
 * Inject css/js files in index.html
 */

var gulp = require('gulp');
var wiredep = require('wiredep').stream

module.exports = function () {
  return gulp.src('client/app/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('client/app'));
};
