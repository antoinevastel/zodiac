var gulp   = require('gulp');
var mocha  = require('gulp-mocha');

gulp.task('test', function() {
  return gulp
    .src('test/test.js')
    .pipe(mocha());
});

 
gulp.task('default', ['test']);