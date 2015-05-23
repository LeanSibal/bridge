var gulp = require('gulp'),
	require_dir = require('require-dir');

require_dir('gulp/',{
	recurse: true
});

gulp.task('default', [
	'nodemon'
]);
