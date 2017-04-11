;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('TopicController', Controller)

  function Controller (topicFactory, $location, $routeParams) {
  var self = this
    self.createTopic = function(){
      topicFactory.create(self.topic, function(topic){
        console.log(topic.data)
        console.log(self.worknow.length)
        self.index()
      })
    }
    self.index = function(){
      topicFactory.index(function(returnData){
        self.worknow = returnData.data
        console.log(self.worknow)
      })
    }
    self.showTopic = function(){
      topicFactory.showTopic($routeParams, function(returnData){
        console.log(returnData)
        self.topic = returnData.data
      })
    }
  }
})()
