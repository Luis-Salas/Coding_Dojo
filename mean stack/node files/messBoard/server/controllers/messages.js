const mongoose = require('mongoose')
const Message = mongoose.model('Message')
const Comment = mongoose.model('Comment')

 module.exports = {
   index: function(req, res){
       Message.find({})
         .populate('_comments')
         .exec(function (err, messages){
         console.log(messages);
         if(err) res.json(err)
         else res.render('index', {messages:messages})
       })
     },
     create_messages:function(req, res){
       var message = new Message({name:req.body.name, message:req.body.message})
       message.save(function (err){
         if (err) res.json(err)
         else res.redirect('/')
       })
     },
     create_comments:function(req, res){
       //find parent
       Message.findOne({_id:req.params.message_id}, function (err, message){
         if (err) res.json(err)
         else{
           //create child
           var comment = new Comment({
             name: req.body.name,
             comment: req.body.comment,
             _message:message._id
           })
           //save child
           comment.save(function(err){
             if (err) res.json(err)
             else{
               //update parent with child
               message._comments.push(comment._id)
               //save our newly updated parents
               message.save(function(err){
                 if(err) res.json(err)
                 //get the heck outta here
                 else res.redirect('/')
               })
             }
           })
         }
       })
     }
 }
