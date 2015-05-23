var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(){
	nodemon({
		script: 'server.js',
	}).on('restart', function(){
		console.log('Server restarted');
	});
});
gulp.task('default', [
	'nodemon'
]);
