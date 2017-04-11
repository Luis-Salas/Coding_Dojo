(function(){
  'use strict';

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'angular_files/partials/loginReg.html'
    })
    .when('/success', {
      templateUrl: 'angular_files/partials/success.html'
    })
    .when('/poll', {
      templateUrl: 'angular_files/partials/poll.html'
    })
    .when('/show/:poll_id', {
      templateUrl: 'angular_files/partials/show.html'
    })
    .otherwise({
      redirectTo:'/'
    })
  }
})()
