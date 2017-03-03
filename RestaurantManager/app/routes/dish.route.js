(function () {
    'use strict';

    angular
		.module('app')
		.config(["$routeProvider", function ($routeProvider) {
		    $routeProvider
				.when("/DishList", {
				    templateUrl: '/app/views/dish/dishlist.html',
				    controller: 'DishController'
				})
				.when("/AddDish", {
				    templateUrl: '/app/views/dish/adddish.html',
				    controller: 'DishController'
				})
				.when("/EditDish/:id", {
				    templateUrl: '/app/views/dish/editdish.html',
				    controller: 'DishController'
				})
		        .otherwise({ redirectTo: "/" });;
		}]);
})();
