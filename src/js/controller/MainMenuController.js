app.controller('MainMenuController', ['$scope', '$http', '$element', 'AppEventManagerController',
    function (scope, http, element, AppEventManagerController) {
 
        scope.mainMenuItems = [
            {
                "label": "Accelerometer",
                "icon": "glyphicon-smartphone",
                "clickRoute": "accelerometer"
            },
            {
                "label": "Camera",
                "icon": "glyphicon-camera",
                "clickRoute": "camera"
            },
            {
                "label": "Connection",
                "icon": "glyphicon-smartphone",
                "clickRoute": "connection"
            },
            {
                "label": "Device",
                "icon": "glyphicon-smartphone",
                "clickRoute": "device"
            },
            {
                "label": "Geolocation",
                "icon": "glyphicon-geolocation",
                "clickRoute": "geolocation"
            },
            {
                "label": "Notification",
                "icon": "glyphicon-notification",
                "clickRoute": "notification"
            },
            {
                "label": "Vibration",
                "icon": "glyphicon-smartphone",
                "clickRoute": "vibration"
            }
        ];

        scope.$on('NewSectionLoaded', function (event, args) {

            var menuItems = document.getElementById('menuItems');
            for (i = 0; i < menuItems.childNodes.length; i++) {
                var item = menuItems.childNodes[i];
                if (item.nodeName == "LI") {
                    item.classList.remove('menu-item-selected');
                }
            }

            document.getElementById(args).classList.add('menu-item-selected');

        });

        scope.gotoSection = function (routeToGo) {
            scope.snapper.close();
            window.location.href = '#/' + routeToGo;
        };
}]);