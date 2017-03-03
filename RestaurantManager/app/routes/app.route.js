(function () {
    'use strict';

    angular
		.module('app')
		.config(["$routeProvider", function ($routeProvider) {
		    $routeProvider
				.when("/", {
				    templateUrl: '/app/views/restaurant/homerestaurant.html',
				    controller: 'HomeController'
				})
				.otherwise({ redirectTo: "/" });
		}]);
})();
