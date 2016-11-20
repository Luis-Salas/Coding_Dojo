console.log('made it to backend bid')
const mongoose = require('mongoose')
const Bid = mongoose.model('Bid')

function bidController(){
  this.create = function(req,res){
    console.log('klfjlskfjsldf')
    console.log(req.body)
    var bid = new Bid({
      product1: req.body.bid,
      _user: req.session.user_id
    })
    bid.save(function(err){
      if(err)res.json(err)
      else res.json(bid)
    })
  }

  this.get1 = function(req,res ){
    console.log('made it into backend index')
    Bid.find({}, function(err, bid){
      if(err) res.json(err)
      else res.json(bid)
    })
  }
  this.create2 = function(req,res){
    console.log('klfjlskfjsldf')
    console.log(req.body)
    var bid = new Bid({
      product2: req.body.bid,
      _user: req.session.user_id
    })
    bid.save(function(err){
      if(err)res.json(err)
      else res.json(bid)
    })
  }
  this.create3 = function(req,res){
    console.log('klfjlskfjsldf')
    console.log(req.body)
    var bid = new Bid({
      product3: req.body.bid,
      _user: req.session.user_id
    })
    bid.save(function(err){
      if(err)res.json(err)
      else res.json(bid)
    })
  }
  this.get2 = function(req,res ){
    console.log('made it into backend index')
    Bid.find({}, function(err, bid){
      if(err) res.json(err)
      else res.json(bid)
    })
  }


  // this.show = function(req,res){
  //   console.log('[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]')
  //   console.log(req.params.poll_id)
  //   Poll.findOne({ '_id': req.params.poll_id }, function(err,poll){
  //     if(err){
  //       console.log(err)
  //       res.json(err)
  //     } else {
  //       console.log(poll)
  //       res.json(poll)
  //     }
  //   })
  // }
  // this.vote = function(req,res){
  //   console.log('MADE IT TO THE VOTE')
  //   console.log(req.params)
  //   console.log('_______________')
  //   console.log(req.body.vote1)
  //   Poll.findOne({ _id: req.params.vote_id}, function(err,poll){
  //     console.log('++++++++++++++++++++++++++=')
  //     if(err){
  //       console.log(err)
  //       res.json(err)
  //     } else {
  //         poll = poll + req.params
  //         poll.vote1 = poll
  //         console.log('OMGOMGOMGOMGOMGOMGOMGOGMOGMOGMOGMGOMGOMGOGMGO')
  //         console.log(poll.vote1)
  //         res.json(poll.vote1)
  //     }
  //   })
  // }
}

module.exports = new bidController()
