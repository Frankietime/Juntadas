angular.module('app.directives', [])

.directive('map', [function(){
    return {
        
        template: '<div id="map" style="height:150px;" data-tap-disabled="true"></div>'
    };
    }])
.directive('tabsDirective', [function () {

}]);