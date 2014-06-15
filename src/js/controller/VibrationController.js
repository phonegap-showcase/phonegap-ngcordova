app.controller('VibrationController', ['$scope', '$cordovaVibration', 'AppEventManagerController', 
                                          
    function (scope, cordovaVibration, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('vibration');
        
        scope.pageItems = {
            "title": "Vibration"
        };
        
        scope.vibrate = function () {
            cordovaVibration.vibrate(100);      
        };

}]);