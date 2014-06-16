phonegap-ngcordova
==================

> A simple example to use AngularJS and ngCordova

This app have a template based on http://phonegapbootcamp.io - Thanks @demianborba for share

## Usage

### Create your Phonegap Project

    cordova create [DIRECTORY] [YOUR-ID] [Project-Name]
    ex: cordova create phonegap-ngcordova-app br.com.horochovec.mobile Phonegap-ngCordova

### Clone this project

    git clone https://github.com/phonegap-showcase/phonegap-ngcordova.git phonegap-ngcordova-source

### Install the tools

    cd phonegap-ngcordova-source/
    npm install bower
    npm install gulp
    npm install gulp-jshint
    npm install jshint-stylish
    npm install gulp-rename
    npm install gulp-sass
    npm install gulp-minify-css
    npm install gulp-notify
    npm install gulp-uglify
    npm install gulp-concat
    
### Install the dependencies

    bower install

### Build the project

    gulp
    
At this time, we have all fonts at directory '../phonegap-ngcordova-app/www'

### PhoneGap/Build

We need add a platform to test and build this project

    cd ../phonegap-ngcordova-app/
    cordova platform add blackberry10
    
And we need add all plugins to this project work ;)

    cordova plugin add org.apache.cordova.camera
    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.device-motion
    cordova plugin add org.apache.cordova.dialogs
    cordova plugin add org.apache.cordova.geolocation
    cordova plugin add org.apache.cordova.network-information
    cordova plugin add org.apache.cordova.vibration

For final test

    cordova build
    cordova run

Enjoy
