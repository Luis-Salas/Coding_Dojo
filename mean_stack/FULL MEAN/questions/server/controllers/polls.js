console.log('made it to backend Poll')
const mongoose = require('mongoose')
const Poll = mongoose.model('Poll')

function pollController(){
  console.log('inside the poll')
  this.create = function(req,res){
    console.log('____name')
    console.log(req.session.name)
    console.log('____req.body')
    console.log(req.body)
    var poll = new Poll({
      question: req.body.question,
      option_1: req.body.option_1,
      option_2: req.body.option_2,
      option_3: req.body.option_3,
      option_4: req.body.option_4,
      _user:req.session.user_id
    })
    poll.save(function(err){
      if(err) res.json(err)
      else res.json(poll)
    })
    console.log('+++++++')
    console.log(poll)
  }
  this.index = function(req,res ){
    console.log('made it into backend index')
    Poll.find({}, function(err, poll){
      if(err) res.json(err)
      else res.json(poll)
    })
  }
  this.show = function(req,res){
    console.log('[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]')
    console.log(req.params.poll_id)
    Poll.findOne({ '_id': req.params.poll_id }, function(err,poll){
      if(err){
        console.log(err)
        res.json(err)
      } else {
        console.log(poll)
        res.json(poll)
      }
    })
  }
  this.vote = function(req,res){
    console.log('MADE IT TO THE VOTE')
    console.log(req.params)
    console.log('_______________')
    console.log(req.body.vote1)
    Poll.findOne({ _id: req.params.vote_id}, function(err,poll){
      console.log('++++++++++++++++++++++++++=')
      if(err){
        console.log(err)
        res.json(err)
      } else {
          poll = poll + req.params
          poll.vote1 = poll
          console.log('OMGOMGOMGOMGOMGOMGOMGOGMOGMOGMOGMGOMGOMGOGMGO')
          console.log(poll.vote1)
          res.json(poll.vote1)
      }
    })
  }
}

module.exports = new pollController()
