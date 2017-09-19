/**
 * Created by lenovo on 2017/8/9.
 */
angular.module('TodoApp')
    .directive('myDirective1', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: true,
            template: '<span>hello world</span>',
            compile: function (tElement) {
                console.log('compile:', tElement);
                return function (scope, elem) {
                    console.log('link:', elem);
                }
            }
        }
    })
    .directive('pieceOfFood', function () {
        return {
            template: '{{pieceOfFood}}',
            link: function (scope, element, attrs) {
                attrs.$observe('pieceOfFood', function (value) {
                    scope.pieceOfFood = scope.$eval(value);
                });
            }
        };
    });