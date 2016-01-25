'use strict';

var path = require('path');
var _ = require('lodash');

var all = {

  env: process.env.NODE_ENV || 'development',
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 9000,

  // Should we populate the DB with sample data?
  seedDB: false,

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  secrets: {
    session: process.env.SESSION_SECRET || 'secretKey'
  }
};

module.exports = _.merge(all, require('./' + all.env + '.js'));
