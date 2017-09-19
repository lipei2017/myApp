myApp.controller('saEditorThingyCtrl', ['$scope', 'saNavigationGuard', function($scope, saNavigationGuard) {
    var editing = false;
    var navigationGuardian = function() {
        return editing ? "Edit in progress" : undefined;
    };

    saNavigationGuard.registerGuardian(navigationGuardian);

    $scope.startEdit = function(){
        if (editing) return;
        editing = true;
        // Stuff happens
    };
    $scope.endEdit = function() {
        if (!editing) return;
        editing = false;
    };
}]);