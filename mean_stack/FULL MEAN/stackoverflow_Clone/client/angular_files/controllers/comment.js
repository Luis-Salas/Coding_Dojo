;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('commentController', Controller)
  function Controller(commentFactory, $location,$routeParams){
    var self = this
    self.create = function(id){
      commentFactory.create(self.comment,id, function(returnData){
        console.log('---------------------------------------')
        console.log(returnData.data)
        self.postComment.push(returnData.data)
      })
    }
    self.index = function(id){
      commentFactory.index(id ,function(returnData){
        console.log(returnData)
        self.postComment = returnData.data
      })
    }
  }
})()
