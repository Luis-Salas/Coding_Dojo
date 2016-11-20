const messages = require('../controllers/messages.js')
module.exports = function (app) {
  app.get('/', function(req, res){
    messages.index(req,res)
  })

  app.post('/message', function(req,res){
    messages.create_messages(req,res)
  })
  app.post('/comments/:message_id', function(req,res){
    messages.create_comments(req, res)
  })
}
