app.controller('CameraController', ['$scope', '$cordovaCamera', 'AppEventManagerController',
    function (scope, cordovaCamera, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('camera');

        scope.options = { 
            quality : 100, 
            destinationType : Camera.DestinationType.FILE_URI
        };
        
        scope.image;
        
        scope.message;
        
        scope.pageItems = {
                "title": "Camera"
        };
        
        scope.getPicture  = function () {
            cordovaCamera.getPicture(scope.options).then(function(imageData) {
                scope.image = imageData;
            }, function(err) {
                scope.message = "Error"
            });
        };

}]);