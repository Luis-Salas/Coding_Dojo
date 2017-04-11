(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('pollFactory', factory)

  function factory($http){
    var factory = {}

    factory.makePoll = function(poll, callback){
      console.log(poll)
      $http.post('/poll', poll).success(function(poll){
        console.log('got me some DA TA')
        callback(poll)
      })
    }
    factory.getPoll = function(callback){
      console.log('made it to the poll factory')
      $http.get('/getPoll').success(function(poll){
        callback(poll)
      })
    }
    factory.show = function(poll_id, callback){
      console.log(poll_id)
      $http.get('/show/' + poll_id).success(function(poll){
        console.log('0000000000000000000000000000000000000000')
        console.log(poll)
        callback(poll)
      })
    }
    factory.vote1 = function(poll_id, pollInfo, callback){
      console.log('made it to vote 1 factory method')
      $http.post('/vote/'+ poll_id, pollInfo).success(function(vote){
        console.log(vote)
        callback(vote)
      })
    }
    return factory
  }
})()
