(function () {
    'use strict';

    angular.module('app')
           .directive('restaurantNavbar', function () {
               return {
                   restrict: 'E',
                   templateUrl: '/app/views/navbar.html',
                   controller: 'NavbarController',
               };
           });

})();