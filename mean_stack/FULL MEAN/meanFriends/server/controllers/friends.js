const mongoose = require('mongoose')
const Friend = mongoose.model('Friend')

function friendController(){
  this.create = function(req,res){
    var friend = new Friend({
      first_name: req.body.first,
      last_name: req.body.last,
      birthday: req.body.birthday
    })
    friend.save(function(err){
      if(err)res.json(err)
      else res.json(friend)
    })
  }
  this.index = function(req,res){
    Friend.find({}, function(err,friend){
      if(err) res.json(err)
      else res.json(friend)
    })
  }
  this.show = function(req,res){
    Friend.findOne({ _id: req.params.person_id }, function(err,friend){
      if(err) res.json(err)
      else res.json(friend)
    })
  }
  this.update = function(req,res){
    idk = Friend.findOne({ _id: req.params.person_id }, function(err,friend){
    if(err) res.json(err)
    else{
      friend.first_name = req.body.first_name
      friend.last_name = req.body.last_name
      friend.birthday = req.body.date
      friend.save(function (err){
        if(err) res.json(err)
        else res.json(friend)
        })
      }
    })
  }
  this.destroy = function(req,res){
    console.log(req.params.person_id)
    Friend.remove({_id: req.params.person_id}, function(err,friend){
      if(err) res.json(err)
      else res.json(friend)
    })
  }
}

module.exports = new friendController()
