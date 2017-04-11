;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('PostController', Controller)
  function Controller(postFactory, $location,$routeParams){
    var self = this
    self.post = function(){
      postFactory.answer(self.answer, $routeParams, function(returnData){
        console.log(returnData)
        self.index()
      })
    }
    self.index = function(){
      postFactory.index($routeParams, function(returnData){
        self.things = returnData.data
      })
    }
    self.upvote = function(id,counter){
      console.log(counter)
      postFactory.upvote(id,function(returnData){
        console.log(returnData)
        self.index()
      })
    }

  }
})()
