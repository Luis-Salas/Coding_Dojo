var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// create the express app
var app = express();
var namedb=[];
counter = 0

app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// tell the express app to listen on port 3000
var server = app.listen(8000,"0.0.0.0", function() {
})
var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
  io.sockets.on('connection', function (socket) {
		console.log('/////////////////////////////////////')
		counter += 1
		console.log(counter)
    index = namedb
    console.log(index)
    socket.on("message_data", function (data){
      io.emit('Kevin', {response: data, namedb:namedb});
      console.log('NAME DB IS')
      console.log(namedb)
    })
    socket.on('db', function(data){})
    socket.on("my_name", function (data) {
			console.log(data)
      namedb.push(data)
      socket.emit('username', {response: data})
    })
  })
