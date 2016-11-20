console.log('making routes')
const users = require('../controllers/users.js')
const poll = require('../controllers/polls.js')

console.log(users)
module.exports = function (app) {
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/poll', poll.create)
  app.get('/getPoll', poll.index)
  app.get('/show/:poll_id', poll.show)
  app.post('/vote/:vote_id', poll.vote)
}
