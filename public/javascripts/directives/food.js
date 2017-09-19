angular.module('ponyDeli').directive('food', function () {
    return {
        scope: { // I'll come back to directive scopes later
            type: '=type'
        },
        template: 'I want to eat some {{type}}!',
        link: function (scope, element, attrs) {
            scope.click = function () {
                letThemHaveIt();
                scope.$emit('food.order', 'scope.type', 'element');
            };

            function letThemHaveIt () {
                // Do some fancy UI things
            }
        }
    };
});
myApp.directive('foodTracker', function () {
    return {
        link: function (scope, element, attrs) {
            scope.$on('food.order', function (e, type) {
            console.log(e);
            console.log(type);
        });
}
};
});