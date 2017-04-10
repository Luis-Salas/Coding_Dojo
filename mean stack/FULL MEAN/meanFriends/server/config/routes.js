console.log('in routes')
const friend = require('../controllers/friends.js')

module.exports = function(app){
  app.post('/create', friend.create)
  app.get('/getFriends', friend.index)
  app.get('/show/:person_id', friend.show)
  app.post('/update/:person_id', friend.update)
  app.get('/destroy/:person_id', friend.destroy)

}
