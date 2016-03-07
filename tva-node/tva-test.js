var http = require('http');
var fs = require('fs');
var mime = require('mime');
var server = http.createServer(handler);
server.listen(80, "127.0.0.1");

function handler (req, res) {
  fs.lstat("public" + req.url, function(err, stats) {
    if (err) {
      res.writeHead(400, {'Content-Type': 'text/plain' });
      res.write("An error occured attempting to retrieve the requested file");
      res.end();
      return;
    }
    if(stats.isDirectory(){
      fs.readFile("public" + req.url + "/index.html", "utf8", function(err, data){
        if (err) {
          res.write("An error occured attempting to retrieve the requested.");
          res.end();
          return;
        }
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
      })
    })
  } res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello\n');
  res.end();
}
