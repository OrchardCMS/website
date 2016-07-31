import gulp from 'gulp';
import gulpLoadPlugins  from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import './gulp/tasks/styles';
import './gulp/tasks/watch';

const $ = gulpLoadPlugins();


gulp.task('build', done => {
    runSequence(
        'styles'
    );
});



gulp.task('default', ['build'], () => {
    console.log('Gulp is running!');
});