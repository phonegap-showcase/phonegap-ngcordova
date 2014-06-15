app.controller('NotificationController', ['$scope', '$cordovaDialogs', 'AppEventManagerController', 
                                          
    function (scope, cordovaDialogs, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('notification');
        
        scope.pageItems = {
            "title": "Notification"
        };
        
        scope.alert = function () {
            cordovaDialogs.alert('Window Alert');
        };

}]);