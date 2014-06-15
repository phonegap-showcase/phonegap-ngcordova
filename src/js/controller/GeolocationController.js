app.controller('GeolocationController', ['$scope', '$cordovaGeolocation', 'AppEventManagerController', 
                                          
    function (scope, cordovaGeolocation, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('geolocation');
        
        scope.latitude = "";
        scope.longitude = "";
        scope.altitude = "";
        scope.accuracy = "";
        scope.altitudeAccuracy  = "";
        scope.heading = "";
        scope.speed = "";
        scope.timestamp = "";
        scope.options = { frequency: 1000 };
        
        scope.pageItems = {
            "title": "Geolocation"
        };
        
        scope.getCurrentPosition = function () {
            cordovaGeolocation.getCurrentPosition().then(function(position) {
                scope.latitude = position.coords.latitude;
                scope.longitude = position.coords.longitude;
                scope.altitude = position.coords.altitude;
                scope.accuracy = position.coords.accuracy;
                scope.altitudeAccuracy  = position.coords.altitudeAccuracy ;
                scope.heading = position.coords.heading;
                scope.speed = position.coords.speed;
                scope.timestamp = position.timestamp;
            }, function(err) {
                scope.message = "Error"
            });                            
        };

}]);