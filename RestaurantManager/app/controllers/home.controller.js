(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope, $location, RestaurantDataService) {

        $scope.restaurantService = {
            getRestaurants: getRestaurants
        }

        function getRestaurants() {
            RestaurantDataService
                .getRestaurants()
                .then(function (restaurants) {
                    $scope.restaurants = restaurants;
                });
        }
    }
})();
