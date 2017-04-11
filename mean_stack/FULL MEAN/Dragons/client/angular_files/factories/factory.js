(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('DragonFactory', factory)

  function factory($http){
    var factory = {}
    factory.index= function(callback){
      $http.get('/dragons').success(function(dragons){
        callback(dragons)
      })
    }
    factory.createDragons = function(dragonInfo, callback){
      $http.post('/dragons', dragonInfo).success(function(data){
        console.log('____')
        console.log(data)
        callback()
      })
    }
    factory.showDragon = function(dragonId, callback){
      $http.get('/dragons/show/'+dragonId).success(function (dragon){
        console.log(dragon)
        callback(data)
      })
    }

    return factory
  }
})()
