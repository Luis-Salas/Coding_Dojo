;(function () {
  'use strict'

  angular
    .module('myApp')
    .config(config)

  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'angular_files/partials/loginReg.html'
      })
      .when('/success', {
        templateUrl: 'angular_files/partials/success.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
})()
