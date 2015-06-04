var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
	console.log({
		'Connection' : socket.id
	});
	socket.on('event',function(data){
		console.log({
			'event' : data
		});
		socket.broadcast.emit('hello');
	});
});
server.listen(3000);


