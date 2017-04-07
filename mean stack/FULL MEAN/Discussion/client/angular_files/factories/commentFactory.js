(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('commentFactory', factory)

  function factory($http){
    var factory = {}

    factory.create = function(comment,id,callback){
      console.log(id)
      $http.post('/createComment/' + id , comment).then(function(returnData){
        callback(returnData)
      })
    }
    factory.index = function(id,callback){
      console.log(id)
      $http.get('/getComment/' + id).then(function(returnData){
        callback(returnData)
      })
    }
    return factory
  }
})()
