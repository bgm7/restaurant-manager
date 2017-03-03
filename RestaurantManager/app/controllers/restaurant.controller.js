(function () {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantController', RestaurantController);

    function RestaurantController($scope, $location, $routeParams, RestaurantDataService) {
        
        $scope.restaurants = getRestaurants();

        if ($routeParams && $routeParams.id)
            getRestaurantById();

        $scope.restaurantService = {
            getRestaurants: getRestaurants,
            getRestaurantById: getRestaurantById,
            getRestaurantByName: getRestaurantByName,
            addRestaurant: addRestaurant,
            updateRestaurant: updateRestaurant,
            deleteRestaurant: deleteRestaurant,
            filterRestaurantsByName: filterRestaurantsByName
        }

        $scope.goAddRestaurant = function () {
            $location.path('/AddRestaurant/');
        };

        $scope.goRestaurantList = function () {
            $location.path('/RestaurantList/');
        }

        function addRestaurant() {
            RestaurantDataService
                 .addRestaurant($scope.restaurant)
                 .then(function (restaurants) {
                     $location.path('/RestaurantList');
                     alert('Novo restaurante registrado com sucesso.');                     
                     $scope.restaurants = restaurants;
                     $scope.restaurant = {};
                 });
        }

        function deleteRestaurant(id) {
            RestaurantDataService
                .deleteRestaurant(id)
                .then(function (restaurants) {
                    $location.path('/RestaurantList');
                    alert('Restaurant com Id: ' + id + ' deletado com sucesso');                    
                    $scope.restaurants = restaurants;
                });
        }

        function updateRestaurant() {
            var req = {
                Id: $scope.restaurant.Id,
                Name: $scope.restaurant.Name
            };

            RestaurantDataService
                .updateRestaurant(req)
                .then(function (restaurants) {                    
                    $location.path('/RestaurantList');
                    alert('Alteração realizada com sucesso.');
                    $scope.restaurants = restaurants;
                });
        }

        function getRestaurants() {
            RestaurantDataService
                .getRestaurants()
                .then(function (restaurants) {
                    $scope.restaurants = restaurants;
                });
        }

        function getRestaurantById(id) {
            RestaurantDataService
                .getRestaurantById(id || $routeParams.id)
                .then(function (restaurant) {
                    $scope.restaurant = restaurant;
                });
        }

        function getRestaurantByName(name) {
            RestaurantDataService
                .getRestaurantByName(name || $routeParams.name)
                .then(function (restaurant) {
                    $scope.restaurant = restaurant;
                });
        }

        function filterRestaurantsByName(name) {
            if (name && name.length)
                RestaurantDataService
                    .getRestaurantsByName(name || $routeParams.name)
                    .then(function (restaurants) {
                        $scope.restaurants = restaurants;
                    });
            else
                getRestaurants();
        }
    }
})();
