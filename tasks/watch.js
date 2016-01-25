'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile scss if needed.
 * Reinject files
 */

var gulp       = require('gulp');
var path       = require('path');
var config     = require('./config');
var bsync      = require('browser-sync');
var watch      = require('gulp-watch');
var inject     = require('./inject');
var sass       = require('./sass');

module.exports = function () {

  gulp.watch('bower.json', function () {
     inject().pipe(bsync.reload({ stream: true }));
  });

  watch(path.join(config.client.app.path, '**', '*.scss'), function () {
    sass.app().pipe(bsync.reload({ stream: true }));
  });

  watch(path.join(config.client.sample.path, '**', '*.scss'), function () {
    sass.sample().pipe(bsync.reload({ stream: true }));
  });

  watch([path.join(config.client.root, '**', '*.html'),
         path.join(config.client.root, '**', '*.js')], bsync.reload);

};
