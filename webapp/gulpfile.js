var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var templateCache  = require('gulp-angular-templatecache');
var concat  = require('gulp-concat');
var wiredep = require('wiredep').stream;


var config = {
    sassPath: './assets/sass/**/*.scss',
    cssOutputPath: './assets/css/',
    jsOutputPath: './assets/js/',
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
        .pipe(gulp.dest('./assets/fonts'));
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
        .pipe(concat('encurtador.min.js'))
        .pipe(gulp.dest(config.jsOutputPath))
        .pipe(browserSync.stream());
});

gulp.task('wiredep', function(){
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('serve', ['javascripts', 'wiredep', 'sass', 'templates'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(config.templatesPath, ['templates']);
    gulp.watch(config.javascriptsPath, ['javascripts']);
    gulp.watch(config.sassPath, ['sass']);
});


gulp.task('default', ['serve']);
