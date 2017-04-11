var express = require ('express')
const bodyParser = require('body-parser')
var app = express()
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended:true}))
var server= app.listen(8000, function(){
  console.log('port 800')
})
const io = require('socket.io').listen(sever)
io.sockets.on('connextio', function(socket){
  console.log('using sockets', socket id)
  socket.on('userconected', function(data{
    socket.emit('new_user', {data})
  })
})
