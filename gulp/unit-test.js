var gulp = require('gulp'),
	io = require('socket.io-client');

gulp.task('Unit Testing',function(){
	var socket = io.connect('http://localhost:3000');
	socket.on('response',function(response){
		console.log({
			'Socket Response' : response
		});
	});
});
