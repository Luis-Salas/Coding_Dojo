const mongoose = require('mongoose')
const Topic = mongoose.model('Topic')
const Post = mongoose.model('Post')
const Comment =  mongoose.model('Comment')



function TopicContoller(){
  this.create = function(req,res){
    var topic = new Topic({
      topic: req.body.name,
      description: req.body.description,
      category: req.body.category,
      _creator: req.session.user_id
    })
    topic.save(function(err,topic){
      if(err) res.json(err)
      else{
        Topic.find({})
          .populate('_creator')
          .exec(function(err,topic){
            if(err){
              res.json(err)
            }
            else res.json(topic)
        })
      }
    })
  }
  this.index = function(req,res){
    console.log('index method')
    Topic.find({})
      .populate('_creator')
      .exec(function(err,topic){
        if(err){
          res.json(err)
        }
        else res.json(topic)

    })
  }
  this.show = function(req,res){
    Topic.findOne({ _id: req.params.id })
      .populate('_creator')
      .exec(function(err,topic){
        if(err){
          res.json(err)
        }
        else res.json(topic)
    })
  }
  this.answer = function(req,res){
    var post = new Post({
      post: req.body.message,
      _user: req.session.user_id,
      _topic: req.params.id
    })
    post.save(function(err){
      if(err)res.json(err)
      else res.json(post)
    })
  }
  this.postIndex = function(req,res){
    Post.find({_topic: req.params.id})
      .populate('_user')
      .exec(function(err,topic){
        if(err){
          res.json(err)
        }
        else res.json(topic)
      })
    }
    this.createComment = function(req,res){
      var comment = new Comment({
        comment: req.body.message,
        _post: req.params.id,
        _user: req.session.user_id
      })
      console.log
      comment.save(function(err){
        if(err) res.json(err)
        else res.json(comment)
      })
    }
    this.getComment = function(req,res){
      Comment.find({_post: req.params.id})
      .populate('_user')
      .exec(function(err,comment){
        if(err){
          res.json(err)
        }
        else res.json(comment)
      })
    }
    this.upvote = function(req,res){
      Post.findOne({_id: req.params.id}, function(err, post){
        post.counter += 1
        post.save(function(err){
          res.json(err)
        })
      })
    }
}
module.exports = new TopicContoller()
