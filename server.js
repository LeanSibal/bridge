var server = require('http').createServer();
var io = require('socket.io')(server);


io.on('connection', function(connection){
	console.log({
		'Connection' : connection.id
	});
	connection.on('event', function(data){
		console.log('Event');
	});
	connection.on('disconnect', function(){
		console.log('Disconnected');
	});
});
server.listen(3000);
