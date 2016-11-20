(function (){
  'use strict'
  angular
  .module('myApp')
  .factory('usersFactory', factory)

  function factory ($http){
    var factory = {
    }
    factory.register = function (userInfo, callback){
      $http.post('/register', userInfo).success (function(returnData){
        console.log('got data from backend', returnData)
        if (returnData.status){
          alert('good reg')
          callback()
        }else{
          console.log('bad reg')
        }
      })
    }
      factory.login = function(userInfo, callback){
        $http.post('/login', userInfo).success(function
          (returnData){
            console.log(returnData)
          })
        }
        factory.getSession = function (callback) {
          $http.get('/session').success(function (returnData) {
            callback(returnData)
          })
        }
        factory.logout = function (callback) {
          $http.post('/logout').success(function (data) {
            callback()
          })
        }
      return factory

  })()
