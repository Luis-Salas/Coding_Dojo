var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){

  console.log('client request URL: ', request.url);

  if(request.url == '/'){
    fs.readFile('views/index.html', 'utf8', function (errors,contents){
      console.log(errors)
      console.log(contents)
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === "/dog"){
    fs.readFile('views/doggo.html', 'utf8', function(errors, contents){
      console.log(errors)
      console.log(contents)
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/dog1'){
    fs.readFile('views/images/dog.jpg',function(errors, contents){
      console.log(errors)
      console.log(contents)
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/car'){
    fs.readFile('views/car.html', function(errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/car5'){
    fs.readFile('views/images/car.jpg',function(errors, contents){
      console.log(errors)
      console.log(contents)
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/new?'){
    fs.readFile('views/new.html',function(errors, contents){
      console.log(errors)
      console.log(contents)
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }


  else{
    response.end('File not found')
  }
});
  server.listen(6789);
  console.log("Running in localhost at port 6789")
