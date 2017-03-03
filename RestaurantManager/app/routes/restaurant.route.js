(function () {
	'use strict';

	angular
		.module('app')
		.config(["$routeProvider", function ($routeProvider) {
			$routeProvider
				.when("/", {
				    templateUrl: '/app/views/homerestaurantmanager.html',
					controller: 'RestaurantController'
				})
				.when("/RestaurantList", {
					templateUrl: '/app/views/restaurant/restaurantlist.html',
					controller: 'RestaurantController'
				})
				.when("/AddRestaurant", {
					templateUrl: '/app/views/restaurant/addrestaurant.html',
					controller: 'RestaurantController'
				})
				.when("/EditRestaurant/:id", {
					templateUrl: '/app/views/restaurant/editrestaurant.html',
					controller: 'RestaurantController'
				})
			    .otherwise({ redirectTo: "/" });;
		}]);
})();
