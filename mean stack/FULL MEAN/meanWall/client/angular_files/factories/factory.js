(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory($http){
    var factory = {}
    factory.createUser = function (userInfo, callback) {
      $http.post('/login', userInfo).success(function(returnData){
        console.log('got data from the backend', returnData)
        callback(returnData)
      })
    }
    return factory
  }

})()
