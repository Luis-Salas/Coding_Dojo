const user = require('../controllers/User.js')
const topic = require('../controllers/Topic.js')


module.exports = function(app){
  app.post('/login', user.index)
  app.get('/session', user.session)
  app.post('/createTopic', topic.create)
  app.get('/index', topic.index)
  app.get('/showTopic/:id', topic.show)
  app.post('/answer/:id', topic.answer)
  app.post('/indexPost/:id', topic.postIndex)
  app.post('/createComment/:id', topic.createComment)
  app.get('/getComment/:id', topic.getComment)
  app.post('/upvote/:id', topic.upvote)

}
