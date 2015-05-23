var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(){
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: [
			'node_modules/**/*',
			'gulpfile.js',
			'gulp/*'
		],
		env: {
			'NODE_ENV': 'development'
		}
	}).on('restart', function(){
		gulp.run('Unit Testing');
	});
});
