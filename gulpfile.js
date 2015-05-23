var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	io = require('socket.io-client');

gulp.task('unit-testing', function(){
	var socket = io.connect('http://localhost:3000');
	socket.on('response',function(response){
		console.log({
			'Socket Response' : response
		});
	});
	console.log('unit test');
});
gulp.task('nodemon', function(){
	nodemon({
		script: 'server.js',
	}).on('restart', function(){
		gulp.run('unit-testing');
	});
});
gulp.task('default', [
	'nodemon'
]);
