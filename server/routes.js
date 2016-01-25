'use strict';

var config = require('./config/environment');
var express = require('express');
var path = require('path');
var url = require('url');

module.exports = function (app) {

  // API
  app.use('/api/site', require('./api/site'));
  app.use('/api/page', require('./api/page'));

  app.route('/:url(api|app|bower_components|assets)/*')
    .get(function (req, res) {
      res.status(404).end();
    });

  app.use(function(req, res, next){
    var namespace = 'sites'
    var subdomain = req.subdomains[0];
    if(subdomain){
      req.url = '/' + namespace  + '/' + subdomain + req.url;
      }

    next();
  });

  app.use(express.static(path.join(config.root, 'client')));

  // All other routes should redirect to the index.html
  app.route('/*')
  .get(function(req, res) {
    var namespace = 'sites'
    var subdomain = req.subdomains[0];
    if(subdomain){
      res.sendFile(path.resolve(app.get('appPath') + '/' + namespace  + '/' + subdomain + '/index.html'));
      return;
    }
    res.sendFile(path.resolve(app.get('appPath') + '/app/index.html'));
  });

};
