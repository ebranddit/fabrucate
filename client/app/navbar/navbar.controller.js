'use strict';

angular.module('fab')
  .controller('NavbarCtrl', function ($scope, $location) {
    var menuItems = [];

    menuItems.push({title: "Home", link: "/"});
    menuItems.push({title: "Features", link: "/feature"});
    menuItems.push({title: "Plans", link: "/plan"});
    menuItems.push({title: "Contact", link: "/contact"});


    $scope.menuItems = menuItems;

    $scope.menuCollapsed = true;

    $scope.toggleMenu = function(){
      $scope.menuCollapsed = !$scope.menuCollapsed;
    }

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
