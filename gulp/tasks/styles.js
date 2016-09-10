import gulp from 'gulp';
import config from '../gulp.config';
import gulpLoadPlugins from 'gulp-load-plugins';

// PostCSS processors
import bem from 'postcss-bem';
import bemLinter from 'postcss-bem-linter';
import reporter from 'postcss-reporter';
import cssnext from 'postcss-cssnext';
import cssImport from 'postcss-import';
import normalize from 'postcss-normalize';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';
import postcssfor from 'postcss-for';
import responsiveType from 'postcss-responsive-type';

const $ = gulpLoadPlugins();

gulp.task('styles', [/*'styles-lint'*/], () => {
    const AUTOPREFIXER_BROWSERS = ['last 1 version'];

    var processors = [
        cssImport,
        // bem({separators: {
        //     modifier: '--'
        // }}),
        // postcssfor,
        
        cssnext({browsers: AUTOPREFIXER_BROWSERS}),
        responsiveType(),
        normalize,
        mqpacker({sort: true})//,
        //cssnano({autoprefixer: false})
    ];

    return gulp.src(config.paths.css.all)
        .pipe($.postcss(processors))
        .pipe($.header('/** Generated: ${date} **/\n\n', { date : (new Date()).toString() } ))
        .pipe(gulp.dest(config.paths.css.dist))
        .pipe($.size({title: 'styles'}));
});

gulp.task('styles-lint', ()=> {
    var processors = [
        bemLinter({ preset: 'bem' }),
        reporter({ clearMessages: true })
    ];
    return gulp.src(config.paths.css.all)
        .pipe($.postcss(processors))
});