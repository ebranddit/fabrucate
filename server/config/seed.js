/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';

var Site = require('../api/site/site.model');
var Page = require('../api/page/page.model');
var User = require('../api/user/user.model');

Site.find({}).remove(function() {
  Site.create({
    name : 'demo',
    primaryEmail : 'admin@admin.com'
  }, function(){
    console.log('finished populating sites');
  }

);
});

Page.find({}).remove(function() {
  Page.create({
    site : 'demo',
    url : 'home',
    index: 1,
    title : 'Home',
    sections: [{
      type: 'slideshow',
      layout: {
        width: 12,
        height: 12
      }
    },{
      type: 'article',
      layout: {
        width: 6,
        height: 12
      }
    },{
      type: 'video',
      layout: {
        width: 6,
        height: 12
      }
    }
    ]
  }, {
    site : 'demo',
    url : 'teachers',
    index: 2,
    title : 'Teachers'
  }, {
    site : 'demo',
    url : 'about',
    index: 3,
    title : 'About Us'
  },{
    site : 'ran',
    url : 'home',
    index: 0,
    title : 'Home'
  }, function(err){
    console.log(err);
    console.log('finished populating pages');
  }

);
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  }
);
});
