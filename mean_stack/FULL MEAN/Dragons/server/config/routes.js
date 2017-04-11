console.log('making routes')
const users = require('../controllers/users.js')

console.log(users)
module.exports = function (app) {
  app.get('/dragons', users.index)
  app.get('/dragons/show/:dragon_id', users.show)
  app.get('/dragons/update/:dragon_id', users.update)
  app.post('/dragons', users.create)
  app.get('/dragons/:dragon_id', users.destroy)



}
