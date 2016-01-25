'use strict';

var path = require('path');

var CLIENT_ROOT = 'client';
var APP_ROOT = 'app';
var SAMPLE_ROOT = path.join('sites', 'demo');

module.exports = {
  client: {
    root: CLIENT_ROOT,
    app: {
      root: APP_ROOT,
      path : path.join(CLIENT_ROOT, APP_ROOT)
    },
    sample:{
      root: SAMPLE_ROOT,
      path : path.join(CLIENT_ROOT, SAMPLE_ROOT)
    }
  }
};
