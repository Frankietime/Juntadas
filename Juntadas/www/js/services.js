angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

    .service('mapService', ['$cordovaGeolocation', function ($cordovaGeolocation){
        var service = {};
        var geocoder;
        var map;        
        service.setLocation = function (scope, address) {  
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(-34.397, 150.644);
            var mapOptions = {
                zoom: 15,
                center: latlng
            }
            scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var address = address;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    scope.map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    marker.setMap(scope.map);
                    
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });            
        };
        return service;
}]);