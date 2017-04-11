console.log('made it to poll controller')
;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('pollController', Controller)

  function Controller (pollFactory, $location, $routeParams) {
    var self = this
    if($routeParams.poll_id){
      pollFactory.show($routeParams.poll_id, function(returnData){
        console.log('we have an id timeto')
        console.log("in cont:", returnData)
        self.show = returnData
        console.log('!!!!!!!!!!!!1')
        console.log(self.show)
        console.log($routeParams)
        })
    }
    self.makePoll = function (){
      pollFactory.makePoll(self.poll, function(returnData){
        console.log('YOU ARE HERE MAKING A POLL')
        console.log(self.poll);
        console.log('in callback', returnData)
      })
    }
    self.getPoll = function (){
      console.log('GETTING POLL')
      pollFactory.getPoll(function(returnData){
        console.log('got something back', returnData)
        self.polls = returnData
      })
    }
    self.vote1 = function(poll_id){
      console.log('___________________________________')
      console.log(poll_id)
      self.show.vote1 += 1;
      console.log(self.show);
      pollFactory.vote1(poll_id, self.show, function(returnData){
        self.poll = returnData
      })
      console.log('IN THE VOTE! METHOD')
    }
  }
})()
