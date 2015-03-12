var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

// - Global configuration -
var mainEntry = './src/main.js'

var browserifyRef = browserify({
	entries: mainEntry,
	extensions: ['.js'],
	debug: true
});
// -- --- --

var bundle = function(b) {
	b.transform(babelify)
	.on('error', function(error) {
		console.log(error.stack);
		this.emit('end');
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./dist'));
}

gulp.task('build', function () {
	bundle(browserifyRef);
});

gulp.task('watch', function() {
	bWatch = watchify(browserifyRef);
	bWatch.on('update', function() {
		bundle(bWatch);
	});
  
	bWatch.add(mainEntry);
	bundle(bWatch);
});

gulp.task('default', ['build']);
