(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('friendFactory', factory)

  function factory($http){
    var factory = {}

    factory.createFriend = function(friendInfo, callback){
      $http.post('/create', friendInfo).then(function(returnData){
        callback(returnData)
      })
    }
    factory.index = function(callback){
      $http.get('/getFriends').then(function(friend){
        callback(friend)
      })
    }
    factory.show = function(person_id, callback){
      console.log(person_id)
      $http.get('/show/' + person_id).then(function(friend){
        callback(friend)
      })
    }
    factory.update = function(friend, person_id, callback){
      $http.post('/update/' + person_id, friend).then(function(friend){
        callback(friend)
      })
    }
    factory.delete = function(person_id, callback){
      console.log(person_id)
      $http.get('/destroy/' + person_id).then(function(friend){
        callback(friend)
        $location.url('/home')
      })
    }
    return factory
  }
})()
