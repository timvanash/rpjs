/* var http = require('http');
var tvaServer = http.createServer(handler);

tvaServer.listen(3000); */
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});
server.listen(3000);

/*function handler(req,res)
  {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World\n');
    res.end();
}
*/
