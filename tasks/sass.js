'use strict';

/**
 * Compile sass
 */

var gulp    = require('gulp');
var path = require('path');
var config = require('./config');
var sass    = require('gulp-ruby-sass');

module.exports = {
  app : function(){
    return sass(path.join(config.client.app.path, 'app.scss'))
      .on('error', sass.logError)
      .pipe(gulp.dest(path.join(config.client.app.path)));
  },

  sample : function(){
    return sass(path.join(config.client.sample.path, 'app.scss'))
      .on('error', sass.logError)
      .pipe(gulp.dest(path.join(config.client.sample.path)));
  }
}
