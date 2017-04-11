console.log('made it to bid controller')
;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('bidController', Controller)

  function Controller (bidFactory, $location, $routeParams) {
    var self = this
    if($routeParams.poll_id){
      bidFactory.show($routeParams.poll_id, function(returnData){
        console.log("in cont:", returnData)
        self.show = returnData
        console.log($routeParams)
        })
    }
    self.create = function (){
      console.log(self.product1)
      bidFactory.create(self.product1, function(returnData){
        console.log('in callback', returnData)
      })
      $location.url('/success')
    }
    self.get1 = function (){
      console.log('GETTING bid')
      bidFactory.get1(function(returnData){
        console.log('got something back', returnData)
        self.get1 = returnData
      })
    }
    self.create2 = function (){
      console.log(self.product2)
      bidFactory.create2(self.product2, function(returnData){
        console.log('in callback', returnData)
      })
      $location.url('/success')
    }
    self.create3 = function (){
      console.log(self.product1)
      bidFactory.create3(self.product3, function(returnData){
        console.log('in callback', returnData)
      })
      $location.url('/success')
    }
    self.get2 = function (){
      console.log('GETTING bid')
      bidFactory.get2(function(returnData){
        console.log('got something back', returnData)
        self.get2 = returnData
        for( var i = 0; i < self.get2.length; i++){
          var max = 0
          console.log(self.get2[i].product1)
          if(self.get2[i].product1 > max ){
            max = self.get2[i].product1
            console.log(max)
          }
          return max
        }
      })
    }

  }
})()
