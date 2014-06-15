app.controller('ConnectionController', ['$scope', '$cordovaNetwork', 'AppEventManagerController', 
                                          
    function (scope, cordovaNetwork, AppEventManagerController) {
        
        AppEventManagerController.tellMenuNewSectionLoaded('connection');
        
        scope.states = {};
        scope.states[Connection.UNKNOWN]  = 'Unknown connection';
        scope.states[Connection.ETHERNET] = 'Ethernet connection';
        scope.states[Connection.WIFI]     = 'WiFi connection';
        scope.states[Connection.CELL_2G]  = 'Cell 2G connection';
        scope.states[Connection.CELL_3G]  = 'Cell 3G connection';
        scope.states[Connection.CELL_4G]  = 'Cell 4G connection';
        scope.states[Connection.CELL]     = 'Cell generic connection';
        scope.states[Connection.NONE]     = 'No network connection';
        scope.connectionType = "";
        
        scope.pageItems = {
            "title": "Connection"
        };
        
        scope.getConnectionType = function () {
            scope.connectionType = scope.states[cordovaNetwork.getNetwork()];              
        };

}]);