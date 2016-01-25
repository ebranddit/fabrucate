'use strict';

var gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default',    ['serve']);
gulp.task('nodemon',    ['watch'],    require('./tasks/serve').nodemon);
gulp.task('serve',      ['nodemon'],  require('./tasks/serve').bsync);
gulp.task('watch',      ['inject'],   require('./tasks/watch'));
gulp.task('inject',     ['sass-app', 'sass-sample'],     require('./tasks/inject'));
gulp.task('sass-app',                     require('./tasks/sass').app);
gulp.task('sass-sample',                     require('./tasks/sass').sample);
//gulp.task('preview',    ['build'],    require('./tasks/preview'));
//gulp.task('build',                    require('./tasks/build'));
//gulp.task('bump',       ['version'],  require('./tasks/chore').bump);
//gulp.task('version',                  require('./tasks/chore').version);
