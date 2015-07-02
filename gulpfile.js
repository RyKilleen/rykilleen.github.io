var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    runSequence = require('run-sequence'),
    console     = require('better-console');


// plugins allows us to save space in this file by automatically reading in our packages.json file and pulling in dependencies from there.

// Gulp plumber error handler
var onError = function(err) {
  console.log(err);
  this.emit('end');
};


// Let us type 'gulp' on the command line and run all of our tasks.
gulp.task('default', ['buildSequence', 'watch']);


//Allows for sync and async functions. Anything within [] runs async
gulp.task('buildSequence', function() {
  console.clear();
  runSequence('jshintIndividuals', ['scriptsMinify', 'libs', 'styles'], 'jshintAll');
});

gulp.task('jshintAll', function() {
  return gulp.src(['resources/js/base.js','js/all.js'])

    .pipe(plugins.plumber({
      errorHandler: onError
    }))

    .pipe(plugins.concat('baseAndAll.js'))

    .pipe(plugins.jshint())

    .pipe(plugins.jshint.reporter('default'));
});

// Define a task jshint
gulp.task('jshintIndividuals', function() {

  //Clear the Console

  // Pay attention to the resources/js folder for development js
  return gulp.src(['resources/js/**/*.js', '!resources/js/libs/*.js'])
    // handles errors as they come up
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    // Hints at errors
    .pipe(plugins.jshint())
    // Uses a default handler for reporting messages
    .pipe(plugins.jshint.reporter('default'));
    // Gives a message when it's good to go
    //.pipe(plugins.notify({message: 'JS Hinting Task complete'}));
});

gulp.task('libs', function() {
  // Pay attention to the resources/js folder for development js
  return gulp.src(['resources/js/libs/jquery1.11.2.min.js', 'resources/js/libs/*.js'])
    // handles errors as they come up
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    // concatenates into a file called all.js
    .pipe(plugins.concat('libs.js'))
    // Puts it in the /js folder
    .pipe(gulp.dest('./js'))
    .pipe(plugins.savefile())
    //Rename for minifying
    .pipe(plugins.rename('libs.min.js'))
    // Removes any debuggers;
    .pipe(plugins.stripDebug())
    // Compresses javascript
    .pipe(plugins.uglify())
    .pipe(plugins.savefile());

    // Gives a message when it's good to go
    //.pipe(plugins.notify({ message : 'Scripts task complete' }));
});

gulp.task('scriptsMinify', function() {
  // Pay attention to the resources/js folder for development js
  return gulp.src(['resources/js/**/*.js','!resources/js/libs/*.js'])
    // handles errors as they come up
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    // concatenates into a file called all.js
    .pipe(plugins.concat('all.js'))
    // Puts it in the /js folder
    .pipe(gulp.dest('./js'))
    .pipe(plugins.savefile())
    //Rename for minifying
    .pipe(plugins.rename('all.min.js'))
    // Removes any debuggers;
    .pipe(plugins.stripDebug())
    // Compresses javascript
    .pipe(plugins.uglify())
    .pipe(plugins.savefile());

    // Gives a message when it's good to go
    //.pipe(plugins.notify({ message : 'Scripts task complete' }));
});

gulp.task('styles', function() {
  // Pay attention to the resources/scss folder for development scss.
  return gulp.src('resources/scss/*.scss')
    // handles errors as they come up
    .pipe(plugins.plumber({
      errorHandler: onError
    }))

    // Uses compass with the following parameters
    .pipe(plugins.compass({
      config_file: './config.rb',
      css: './css',
      sass: 'resources/scss',
      outputStyle: ':compressed'
    }))
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 version'],
        cascade: false
    }))
    // The destination file for the end css.
    .pipe(gulp.dest('./css'));
    // Gives a message when it's good to go
    //.pipe(plugins.notify({ message: 'Styles task complete'}));
});

gulp.task('watch', function() {
  // Check for modifications in particular directories

  // Whenever a stylesheet is changed, recompile
  gulp.watch('resources/scss/**/*.scss', ['styles']);

  // If user-developed Javascript is modified, re-run our hinter and scripts tasks
  gulp.watch('resources/js/**/*.js', ['buildSequence']);
});
