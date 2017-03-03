(function () {
	'use strict';

	angular.module('app')
           .controller('NavbarController', NavbarController);

	function NavbarController($scope, $location) {

		$scope.isActive = function (path) {

			var currentPath = $location.path().split('/')[1];

			if (currentPath.indexOf('?') !== -1) {

				currentPath = currentPath.split('?')[0];
			}

			return currentPath === path.split('/')[1];
		};
	}
})();