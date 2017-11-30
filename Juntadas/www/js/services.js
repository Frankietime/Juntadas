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
    }])

    // FACTORIES

    .service('juntadaFactory', [function () {

        var service = {};

        service.createJuntada = function () {

            // juntada blank object
            var juntada = {
                name: '',
                guests: [],
                address: '',
                daysRange: {
                    from: '',
                    to: ''
                },
                weekExtension: '',
                duration: {
                    hours: 0,
                    minutes: 0,
                    canBeExtended: {
                        boolean: false,
                        hours: 0,
                        minutes: 0
                    },
                    canBeReduced: {
                        boolean: false,
                        hours: 0,
                        minutes: 0
                    }
                },
                timelessJuntada: {
                    boolean: false,
                    duration: {
                        hours: 0,
                        minutes: 0
                    }
                },
                // corresponds to logic step
                options: {
                    recievePersonally: false,
                    otherHosts: {},
                    lateArrivals: {
                        boolean: false,
                        numberOfGuests: 0,
                        lateness: {
                            hours: 0,
                            minutes: 0
                        }
                    },
                    earlyDepartures: {
                        boolean: false,
                        numberOfGuests: 0,
                        earliness: {
                            hours: 0,
                            minutes: 0
                        }
                    },
                    absences: {
                        boolean: false,
                        // false = how many
                        howManyOrWho: false,
                        numberOfGuests: 0,
                    },
                    cantBeAbsent: {
                        boolean: false,
                    }
                }
            };

            return juntada;
        };

        return service;
    }])

    .service('newJuntadaService', ['cleanDataService', 'juntadaFactory', function (cleanDataService, juntadaFactory) {

        var service = {};
        var juntada = juntadaFactory.createJuntada();        

        service.getCurrentNewJuntada = function () {
            return juntada;
        };

        service.deleteCurrentNewJuntada = function () {
            juntada = {};
        };

        // methods for storing the new juntada's data
        service.addGuests = function (guests) {

            // we use a checkbox to input new guests
            var cleanedGuests = cleanDataService.cleanCheckboxWorkaround(guests);
            juntada.guests = cleanedGuests[0];
        };

        return service;
    }])


    // MISCELLANEUS

    // this service cleans and polish ugly data that exists because of the use of workarounds and other tricks implemented to fulfill angularjs's lack of functionality
    .service('cleanDataService', [function () {
        var service = {};

        // workaround used to save in an object every checked item in a checkbox list, when unchecking, the item becomes a 'false' boolean
        service.cleanCheckboxWorkaround = function (uglyData) {
            var cleanedData = [];

            angular.forEach(item in data, function (key, value) {
                if (typeof value === 'boolean' && !value)
                {
                    return;
                } else {
                    cleanedData.push(value);
                }
            })
        };

        return service;

    }]);