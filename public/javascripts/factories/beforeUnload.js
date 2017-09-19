myApp.factory('saNavigationGuard', ['$window', function($window) {
    var guardians = [];

    var onBeforeUnloadHandler = function(event) {
        var message = "111";
        event.preventDefault();

        console.log(message);
        if (_.any(guardians, function(guardian) { return !!(message = guardian()); })) {
            (event || $window.event).returnValue = message;
            return message;
        } else {
            return undefined;
        }
    }

    var registerGuardian = function(guardianCallback) {
        guardians.unshift(guardianCallback);
        return function() {
            var index = guardians.indexOf(guardianCallback);
            if (index >= 0) {
                guardians.splice(index, 1);
            }
        };
    };

    if ($window.addEventListener) {
        $window.addEventListener('beforeunload', onBeforeUnloadHandler);
    } else {
        $window.onbeforeunload = onBeforeUnloadHandler;
    }

    return {
        registerGuardian: registerGuardian
    };
}]);