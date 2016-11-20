console.log('making routes')
const users = require('../controllers/users.js')
console.log(users)
module.exports = function (app) {
  app.get('/users', users.index)
  app.post('/create', users.createUser)
}
