(function () {
    'use strict';

    angular.module('app')
        .factory('RestaurantDataService', RestaurantDataService);

    function RestaurantDataService($http) {

        var service = {
            getRestaurants: getRestaurants,
            getRestaurantById: getRestaurantById,
            getRestaurantByName: getRestaurantByName,
            addRestaurant: addRestaurant,
            updateRestaurant: updateRestaurant,
            deleteRestaurant: deleteRestaurant,
            getRestaurantsByName: getRestaurantsByName
        };

        function getRestaurants() {
            return $http.get("/Restaurant/GetRestaurants")
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function getRestaurantById(id) {
            return $http.get("/Restaurant/GetRestaurantById", { params: { id: id } })
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function getRestaurantByName(name) {
            return $http.get("/Restaurant/GetRestaurantByName", { params: { name: name } })
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function getRestaurantsByName(name) {
            return $http.get("/Restaurant/GetRestaurantsByName", { params: { name: name } })
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function addRestaurant(restaurant) {
            return $http.post("/Restaurant/AddRestaurant", restaurant)
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function updateRestaurant(restaurant) {
            return $http.post("/Restaurant/UpdateRestaurant", restaurant)
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function deleteRestaurant(id) {
            return $http.post("/Restaurant/DeleteRestaurant", { id: id })
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        return service;
    }
})();
