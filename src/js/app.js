window.onload = function () {
    FastClick.attach(document.body);
};

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngCordova']);

app.controller('AppController', ['$scope', '$rootScope',
    function (scope, rootScope) {
        rootScope.scrollableContent = document.getElementById('scrollable-content-area');
        rootScope.labelToolbar = document.getElementById('label-toolbar');
        rootScope.content = document.getElementById('content');
        rootScope.mainMenu = document.getElementById('list-menu-left');
        scope.isRouting = false;
        scope.snapperTransitionSpeed = 0.2;
        scope.snapper = new Snap({
            element: rootScope.content,
            disable: 'right',
            transitionSpeed: scope.snapperTransitionSpeed
        });
        scope.openSnapper = function () {
            if (scope.snapper.state().state === 'closed') {
                scope.snapper.open('left');
            } else {
                scope.snapper.close();
            }
        };
        scope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
            scope.isRouting = true;
        });
        scope.$on('$routeChangeSuccess', function (event, currRoute, prevRoute) {
            scope.isRouting = false;
            rootScope.scrollableContent.scrollTop = 0;
        });
        scope.resetYpositionMainMenu = function () {
            rootScope.mainMenu.style.paddingTop = window.innerHeight / 6 + 'px';
        };

        scope.setScrollableAreaForMobile = function () {
            rootScope.scrollableContent.style.height = (window.innerHeight - 50) + 'px';
        };
        scope.setScrollableAreaForDesktop = function () {
            rootScope.scrollableContent.style.height = (532 - 50) + 'px';
        };
        scope.resetScrollableAreaHeight = function () {
            var currentWindowWidth = window.innerWidth;
            if (currentWindowWidth < 1024) {
                scope.setScrollableAreaForMobile();
            } else {
                scope.setScrollableAreaForDesktop();
            }
        };
        window.onresize = function () {
            scope.resetScrollableAreaHeight();
        };
        scope.resetScrollableAreaHeight();

        scope.resetYpositionMainMenu();
        window.addEventListener('orientationchange', function () {
            scope.resetYpositionMainMenu();
            scope.resetScrollableAreaHeight();
        }, false);
}]);

app.factory('AppEventManagerController', ['$rootScope',
    function (rootScope) {
        var eventManager = {};

        eventManager.tellMenuNewSectionLoaded = function (section) {
            rootScope.$broadcast('NewSectionLoaded', section);
        };

        return eventManager;
}]);

app.config(['$routeProvider',
    function (routeProvider) {
        routeProvider.
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        }).
        when('/accelerometer', {
            templateUrl: 'partials/accelerometer.html',
            controller: 'AccelerometerController'
        }).
        when('/camera', {
            templateUrl: 'partials/camera.html',
            controller: 'CameraController'
        }).
        when('/connection', {
            templateUrl: 'partials/connection.html',
            controller: 'ConnectionController'
        }).
        when('/device', {
            templateUrl: 'partials/device.html',
            controller: 'DeviceController'
        }).
        when('/geolocation', {
            templateUrl: 'partials/geolocation.html',
            controller: 'GeolocationController'
        }).
        when('/notification', {
            templateUrl: 'partials/notification.html',
            controller: 'NotificationController'
        }).
        when('/vibration', {
            templateUrl: 'partials/vibration.html',
            controller: 'VibrationController'
        }).
        otherwise({
            redirectTo: '/about'
        });
}]);