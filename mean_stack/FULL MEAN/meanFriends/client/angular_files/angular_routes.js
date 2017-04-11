(function(){
  'use strict';

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'angular_files/partials/home.html'
    })
    .when('/new', {
      templateUrl: 'angular_files/partials/new.html'
    })
    .when('/show/:person_id', {
      templateUrl: 'angular_files/partials/show.html'
    })
    .when('/update/:person_id', {
      templateUrl: 'angular_files/partials/update.html'
    })
    .when('/delete/:person_id', {
      templateUrl: 'angular_files/partials/home.html'
    })
    .otherwise({
      redirectTo:'/'
    })
  }
})()
