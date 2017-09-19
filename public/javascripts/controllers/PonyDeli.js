var deli = angular.module('PonyDeli', []);

deli.controller('foodCtrl', function ($scope) {
    $scope.foodTypes = ['onion', 'cucumber', 'hazelnut'];
});

deli.directive('food', function () {
    return {
        scope: { // I'll come back to directive scopes later
            type: '=type'
        },
        template: '<button ng-click="eat()">I want to eat some {{type}}!</button>',
        link: function (scope, element, attrs) {
            scope.eat = function () {
                letThemHaveIt();
                scope.$emit('food.click', scope.type, element);
            };

            function letThemHaveIt () {
                // do some fancy UI things
            }
        }
    };
});

deli.directive('foodTracker', function (fakeService) {
    return {
        link: function (scope, element, attrs) {
            scope.$on('food.click', function (e, type) {
                fakeService.track('food-eater', type);
            });
        }
    };
});

deli.factory('fakeService', function ($log) {
    return {
        track: function (eventType, message) {
            $log.info(eventType, message);
        }
    };
});