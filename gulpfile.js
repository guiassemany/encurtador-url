var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


var config = {
    sassPath: './assets/sass/**/*.scss',
    cssOutputPath: './dist/css/',
    jsOutputPath: './dist/js/',
    sassOptions: {
      errLogToConsole: true,
      style: 'compressed',
      includePaths: [
          './assets/sass',
          './bower_components/bootstrap-sass/assets/stylesheets/',
          './bower_components/font-awesome/scss/',
      ]
    },
    autoprefixerOptions: {
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    },
    javascriptsPath: ['./app/app.module.js','./app/**/*.js'],
    templatesPath: ['./app/**/*.html'],
};

gulp.task('sass', function () {
  return gulp
    .src(config.sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.cssOutputPath))
    .resume();
});


gulp.task('vendorJS', function () {
  return gulp
    .src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/jquery/dist/jquery.min.map',
      './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
    ])
    .pipe(gulp.dest(config.jsOutputPath));
});

gulp.task('font-awesome', function() {
    return gulp.src('./bower_components/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

//Templates
gulp.task('templates', function(){
  return gulp.src(config.templatesPath)
      .pipe(templateCache({module: 'encurtadorUrl'}))
      .pipe(gulp.dest('./assets/js'))
      .pipe(browserSync.stream());
});

//javascripts
gulp.task('javascripts', function(){
    return gulp.src(config.javascriptsPath)
        .pipe(concat('app.js'))
        .pipe(jshint())
        .pipe(gulp.dest('./assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.javascripts, ['javascripts']);
    gulp.watch(paths.sass, ['sass']);
});


gulp.task('default', ['serve']);
