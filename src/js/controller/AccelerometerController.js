app.controller('AccelerometerController', ['$scope', '$cordovaDeviceMotion', 'AppEventManagerController',
    function (scope, cordovaDeviceMotion, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('accelerometer');

        scope.positionX = "";
        scope.positionY = "";
        scope.positionZ = "";
        scope.message = "";
        scope.options = { frequency: 1000 };
        
        scope.pageItems = {
                "title": "Accelerometer"
        };
        
        scope.getCurrentAcceleration  = function () {
            cordovaDeviceMotion.getCurrentAcceleration().then(function(acceleration) {
                scope.positionX = acceleration.x; 
                scope.positionY = acceleration.y;
                scope.positionZ = acceleration.z;
            }, function(err) {
                scope.message = "Error!";
            });
        };
        
        scope.watchAcceleration = function () {
            cordovaDeviceMotion.watchAcceleration(scope.options).then(function() {
                /* unused */
            },  
            function(err) {
                scope.message = "Error!";
            },
            function(acceleration) {
                scope.positionX = acceleration.x; 
                scope.positionY = acceleration.y;
                scope.positionZ = acceleration.z;
            });
        };

}]);