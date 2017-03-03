(function () {
    'use strict';

    angular
        .module('app')
        .controller('DishController', DishController);

    function DishController($scope, $location, $routeParams, DishDataService, RestaurantDataService) {
        
        getDishes();        

        RestaurantDataService.getRestaurants().then(function (restaurantRes) {
            $scope.restaurants = restaurantRes;
        });

        if ($routeParams && $routeParams.id)
            getDishById();

        $scope.dishService = {
            getDishes: getDishes,
            getDishById: getDishById,
            getDishByName: getDishByName,
            addDish: addDish,
            updateDish: updateDish,
            deleteDish: deleteDish
        };

        $scope.goAddDish = function () {
            $location.path('/AddDish/');
        };

        $scope.goDishList = function () {
            $location.path('/DishList/');
        }

        function addDish() {
            DishDataService
                 .addDish($scope.dish)
                 .then(function (dishes) {
                     $location.path('/DishList');
                     alert('Novo prato registrado com sucesso.');
                     $scope.dishes = dishes;
                     $scope.dish = {};
                 });
        }

        function deleteDish(id) {
            DishDataService
                .deleteDish(id)
                .then(function (dishes) {
                    $location.path('/DishList');
                    alert('Prato com Id: ' + id + ' deletado com sucesso');                    
                    $scope.dishes = dishes;
                });
        }

        function updateDish() {
            var req = {
                Id: $scope.dish.Id,
                Name: $scope.dish.Name,
                Price: $scope.dish.Price,
                RestaurantId: $scope.dish.RestaurantId
            };

            DishDataService
                .updateDish(req)
                .then(function (dishes) {
                    $location.path('/DishList');
                    alert('Alteração realizada com sucesso.');                    
                    $scope.dishes = dishes;
                });
        }

        function getDishes() {
            DishDataService
                .getDishes()
                .then(function (dishes) {
                    $scope.dishes = dishes;
                });
        }

        function getDishById(id) {
            DishDataService
                .getDishById(id || $routeParams.id)
                .then(function (dish) {
                    $scope.dish = dish;
                    $scope.restaurant = dish.Restaurant;
                });
        }

        function getDishByName(name) {
            DishDataService
                .getDishByName($routeParams.name)
                .then(function (dish) {
                    $scope.dish = dish;
                    $scope.restaurant = dish.Restaurant;
                });
        }
    }
})();
