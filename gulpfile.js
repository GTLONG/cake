const gulp = require('gulp');
const minjs = require('gulp-uglify');

gulp.task('minjs',function(){
    return gulp.src('./src/js/*.js').pipe(minjs()).pipe(gulp.dest('./dist'));
})

