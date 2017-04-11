;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('questionController', Controller)

  function Controller (questionFactory, $location) {
    var self = this
    self.question = function (){
      console.log(self.content)
      questionFactory.question(self.content, function(returnData){
        console.log('in callback', returnData)
        self.myQuestion = {}
        self.myQuestion.content = returnData.content
      })
    }
    self.getQuestions = function (){
      console.log('im here')
      questionFactory.getQuestions(function(returnData){
        console.log('got something back', returnData)
      })
      getQuestions()
    }
  }
})()
