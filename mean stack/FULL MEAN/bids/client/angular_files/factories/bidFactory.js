(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('bidFactory', factory)

  function factory($http){
    var factory = {}

    factory.create = function(bid, callback){
      console.log(bid)
      $http.post('/create', bid).success(function(bid){
        console.log('got me some DA TA')
        callback(bid)
      })
    }
    factory.get1 = function(callback){
      console.log('made it to the bid factory')
      $http.get('/get1').success(function(bid){
        callback(bid)
      })
    }
    factory.create2 = function(bid, callback){
      console.log(bid)
      $http.post('/create2', bid).success(function(bid){
        console.log('got me some DA TA')
        callback(bid)
      })
    }
    factory.create3 = function(bid, callback){
      console.log(bid)
      $http.post('/create3', bid).success(function(bid){
        console.log('got me some DA TA')
        callback(bid)
      })
    }
    factory.get2 = function(callback){
      console.log('made it to the bid factory')
      $http.get('/get2').success(function(bid){
        callback(bid)
      })
    }



    // factory.show = function(poll_id, callback){
    //   console.log(poll_id)
    //   $http.get('/show/' + poll_id).success(function(poll){
    //     console.log('0000000000000000000000000000000000000000')
    //     console.log(poll)
    //     callback(poll)
    //   })
    // }
  // }
    return factory
  }
})()
