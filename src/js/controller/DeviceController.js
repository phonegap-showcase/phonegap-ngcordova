app.controller('DeviceController', ['$scope', '$cordovaDevice', 'AppEventManagerController', 
                                          
    function (scope, cordovaDevice, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('device');
        
        scope.deviceCordova = "";
        scope.devicePlatform = "";
        scope.deviceUUID = "";
        scope.deviceModel = "";
        scope.deviceVersion = "";
        
        scope.pageItems = {
            "title": "Device"
        };
        
        scope.getDeviceInfo = function() {
            scope.deviceCordova = cordovaDevice.getCordova();
            scope.devicePlatform = cordovaDevice.getModel();
            scope.deviceModel = cordovaDevice.getPlatform();
            scope.deviceUUID = cordovaDevice.getUUID();
            scope.deviceVersion = cordovaDevice.getVersion();
        };

}]);