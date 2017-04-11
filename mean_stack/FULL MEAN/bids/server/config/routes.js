console.log('making routes')
const users = require('../controllers/users.js')
const bid = require('../controllers/bid.js')

module.exports = function (app) {
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/create', bid.create)
  app.get('/get1', bid.get1)
  app.post('/create2', bid.create2)
  app.post('/create3', bid.create3)
  app.get('/get2', bid.get1)


}
