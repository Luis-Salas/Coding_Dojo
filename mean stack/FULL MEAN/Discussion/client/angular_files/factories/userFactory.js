(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory($http){
    var factory = {}

    factory.login = function(login, callback){
      console.log(login)
      $http.post('/login', login).then(function(name){
        callback(name)
      })
    }
    factory.getSession = function(callback){
      $http.get('/session').then(function(returnData){
        callback(returnData)
      })
    }
    return factory
  }
})()
