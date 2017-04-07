(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('topicFactory', factory)

  function factory($http){
    var factory = {}

    factory.create = function(topic, callback){
      console.log(topic)
      $http.post('/createTopic', topic).then(function(returnData){
        callback(returnData)
      })
    }
    factory.index = function(callback){
      $http.get('/index').then(function(data){
        callback(data)

      })
    }
    factory.showTopic = function(id,callback){
      console.log(id.topic_id)
      $http.get('/showTopic/' + id.topic_id).then(function(data){
        callback(data)
      })
    }
    return factory
  }
})()
