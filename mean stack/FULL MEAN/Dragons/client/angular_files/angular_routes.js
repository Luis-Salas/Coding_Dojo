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
    .when('/new', {
      templateUrl: 'angular_files/partials/new.html'
    })
    .when('/show', {
      templateUrl: 'angular_files/partials/show.html'
    })
    .when('/update', {
      templateUrl: 'angular_files/partials/update.html'
    })
    .when('/remove', {
      templateUrl: 'angular_files/partials/remove.html'
    })
    .when('/dragon/:dragon_id',{
      templateUrl: 'angular_files/partials/show.html'
    })
    .otherwise({
      redirectTo:'/'
    })
  }
})()
