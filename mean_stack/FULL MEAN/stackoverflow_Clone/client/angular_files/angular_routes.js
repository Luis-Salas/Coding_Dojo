(function(){
  'use strict';

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'angular_files/partials/index.html'
    })
    .when('/dash', {
      templateUrl: 'angular_files/partials/dashboard.html'
    })
    .when('/user', {
      templateUrl: 'angular_files/partials/user.html'
    })

    .when('/topic/:topic_id', {
      templateUrl: 'angular_files/partials/topic.html'
    })
    .otherwise({
      redirectTo:'/'
    })
  }
})()
