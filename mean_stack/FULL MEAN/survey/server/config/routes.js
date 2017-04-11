console.log('making routes')
const users = require('../controllers/users.js')
const question = require('../controllers/question.js')

console.log(users)
module.exports = function (app) {
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/question', question.create)
}
