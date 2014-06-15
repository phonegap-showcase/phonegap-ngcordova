app.controller('AboutController', ['$scope', 'AppEventManagerController',
    function (scope, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('about');
        
        scope.pageItems = {
                "title": "About"
        };

}]);