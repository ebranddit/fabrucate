'use strict';

angular.module('fab', [
  'ngResource',
  'ui.router'
])
  .config(function ($urlRouterProvider, $locationProvider) {

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

  });
