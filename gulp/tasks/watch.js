import gulp from 'gulp';
import config from '../gulp.config';

gulp.task('watch',()=> {
    gulp.watch(config.paths.css.all, ['styles']);
});