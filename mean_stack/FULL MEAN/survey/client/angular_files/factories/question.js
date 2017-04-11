(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('questionFactory', factory)

  function factory($http){
    var factory = {}

    factory.question = function(question, callback){
      console.log(question)
      $http.post('/question', question).success(function(question){
        console.log('got me some DA TA')
        callback(question)
      })
    }
    factory.getQuestions = function(callback){
      console.log('made it to the getQuestions factory')
    }
    return factory
  }
})()
