var server = require('http').createServer();
var io = require('socket.io')(server);
console.log('Server Started');
io.on('connection', function(connection){
	console.log('Connection');
	connection.on('event', function(data){
		console.log('Event');
	});
	connection.on('disconnect', function(){
		console.log('Disconnected');
	});
});
server.listen(3000);
