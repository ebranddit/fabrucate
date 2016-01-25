'use strict';

angular.module('fab')
  .controller('MainCtrl', function ($scope) {
    var tiles = [];
    tiles.push({title: "Create", link: "/create", icon: "building-o"});
    tiles.push({title: "Manage", link: "/login", icon: "gear"});

    $scope.tiles = tiles;
  });
