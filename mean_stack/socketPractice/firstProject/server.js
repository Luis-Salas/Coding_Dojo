var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("__________________________††¥¥");
  console.log("_________________________††††¥¥");
  console.log("________________________††††††¥¥");
  console.log("_______________________††††††††¥¥");
  console.log("______________________††††††††††¥¥");
  console.log("_____________________††††††††††††¥¥");
  console.log("____________________††††††††††††††¥¥");
  console.log("___________________††††††††††††††††¥¥");
  console.log("__________________††††††††††††††††††¥¥");
  console.log("_________________††††††††††††††††††††¥¥");
  console.log("________________††††††††††††††††††††††¥¥");
  console.log("_______________††††††††††††††††††††††††¥¥");
  console.log("______________††††††††††††††††††††††††††¥¥");
  console.log("_____________††††††††††††††††††††††††††††¥¥");
  console.log("____________††¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥††¥¥");
  console.log("___________††††¥¥¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯††††¥¥");
  console.log("__________††††††¥¥¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯††††††¥¥");
  console.log("_________††††††††¥¥¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯††††††††¥¥");
  console.log("________††††††††††¥¥¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯††††††††††¥¥");
  console.log("_______††††††††††††¥¥¯¯¯¯¯¯¯¯¯¯¯¯¯¯††††††††††††¥¥");
  console.log("______††††††††††††††¥¥¯¯¯¯¯¯¯¯¯¯¯¯††††††††††††††¥¥");
  console.log("_____††††††††††††††††¥¥¯¯¯¯¯¯¯¯¯¯††††††††††††††††¥¥");
  console.log("____††††††††††††††††††¥¥¯¯¯¯¯¯¯¯††††††††††††††††††¥¥");
  console.log("___††††††††††††††††††††¥¥¯¯¯¯¯¯††††††††††††††††††††¥¥");
  console.log("__††††††††††††††††††††††¥¥¯¯¯¯††††††††††††††††††††††¥¥");
  console.log("_††††††††††††††††††††††††¥¥¯¯††††††††††††††††††††††††¥¥");
  console.log("††††††††††††††††††††††††††††††††††††††††††††††††††††††¥¥");
  console.log("¯¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥");
});






var random = 0
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);


  //all the socket code goes in here!
  socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: "sockets are the best!"});
  })
  socket.on("posting_form", function(data){
    console.log('FORM DATA')
    console.log(data)
    console.log('the form is being posted')
    random = Math.floor((Math.random() * 100 ) + 1)
    socket.emit('updatedForm', {number: random , formData:data })
  })
})
