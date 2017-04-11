(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('postFactory', factory)

  function factory($http){
    var factory = {}

    factory.answer = function(message, id, callback){
      $http.post('/answer/'+ id.topic_id, message).then(function(data){
        callback(data)
      })
    }
    factory.index = function(id ,callback){
      $http.post('/indexPost/'+ id.topic_id).then(function(data){
        console.log(data)
        callback(data)
      })
    }
    factory.upvote = function(id,callback){
      console.log(id)
      $http.post('/upvote/'+ id).then(function(data){
        callback(data)
      })
    }
    return factory
  }
})()
