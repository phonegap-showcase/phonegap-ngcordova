var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var dest = '../phonegap-ngcordova-app/www';

gulp.task('lint', function () {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    
    gulp.src('src/scss/*.scss')
        .pipe(sass())
//        .pipe(minifyCSS())
        .pipe(gulp.dest(dest + "/css"))
        .pipe(notify("sass finished and css created in " + dest + "/css"));
    
});

gulp.task('html', function () {

    gulp.src('src/*.html')
        .pipe(gulp.dest(dest))
        .pipe(notify("principal html finished and html created in " + dest));
    
    gulp.src('src/partials/**')
        .pipe(gulp.dest(dest + "/partials"))
        .pipe(notify("templates html finished and html created in " + dest + "/partials"));
    
});

gulp.task('assets', function () {

    gulp.src('src/images/**')
        .pipe(gulp.dest(dest + '/images'))
        .pipe(notify('assests created in ' + dest + '/images'));   

});

gulp.task('fonts', function () {
    
    gulp.src('src/fonts/**')
        .pipe(gulp.dest(dest + '/fonts'))
        .pipe(notify('assests created in ' + dest + '/fonts'));    

});

gulp.task('bower_components', function () {

    gulp.src('src/bower_components/snapjs/snap.js')
        .pipe(gulp.dest(dest + '/bower_components/snapjs/'));
        
    gulp.src('src/bower_components/snapjs/snap.css')
        .pipe(gulp.dest(dest + '/bower_components/snapjs/'));

    gulp.src('src/bower_components/fastclick/lib/fastclick.js')
        .pipe(gulp.dest(dest + '/bower_components/fastclick/lib/'));

    gulp.src('src/bower_components/angular/angular.min.js')
        .pipe(gulp.dest(dest + '/bower_components/angular/'));
    
    gulp.src('src/bower_components/angular/angular.min.js.map')
        .pipe(gulp.dest(dest + '/bower_components/angular/'));
    
    gulp.src('src/bower_components/ngCordova/dist/ng-cordova.js')
        .pipe(gulp.dest(dest + '/bower_components/ngCordova/'));
    
});

gulp.task('scripts', function () {

    gulp.src('src/js/**')
        .pipe(gulp.dest(dest + '/js'))
        .pipe(notify('js minified and files sent to ' + dest + '/js'));
    
});

gulp.task('default', function () {
    
    gulp.run('sass', 'html', 'assets', 'fonts', 'bower_components', 'scripts');
    
});