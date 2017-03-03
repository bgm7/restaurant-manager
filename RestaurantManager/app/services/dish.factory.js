(function () {
    'use strict';

    angular.module('app')
        .factory('DishDataService', DishDataService);

    function DishDataService($http) {

        var service = {
            getDishes: getDishes,
            getDishById: getDishById,
            getDishByName: getDishByName,
            addDish: addDish,
            updateDish: updateDish,
            deleteDish: deleteDish
        };

        function getDishes() {
            return $http.get("/Dish/GetDishes")
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function getDishById(id) {
            return $http.get("/Dish/GetDishById", { params: { id: id } })
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function getDishByName(name) {
            return $http.get("/Dish/GetDishByName", { params: { name: name } })
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function addDish(dish) {
            return $http.post("/Dish/AddDish", dish)
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function updateDish(dish) {
            return $http.post("/Dish/UpdateDish", dish)
                        .then(function (result) {
                            return result.data;
                        })
                        .catch(function (result) {
                            console.log(result);
                        });
        }

        function deleteDish(id) {
            return $http.post("/Dish/DeleteDish", { id: id })
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
