(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory($http){
    var factory = {}

    factory.login = function(userInfo, callback){
      console.log('made it to factory!')
      $http.post('/login', userInfo).success(function(returnData){
        console.log('got data from the backend', returnData)
        callback(returnData)
      })
    }
      factory.getSession = function(callback){
        console.log('im here!')
        console.log('_____')
        $http.get('/session').success(function(returnData){
          callback(returnData)
        })
    }
    return factory
  }
})()
