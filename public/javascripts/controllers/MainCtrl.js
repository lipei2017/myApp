/**
 * Created by lenovo on 2017/8/9.
 */

    angular.module('myApp').controller("MainCtrl", function( $scope ){
        $scope.name = 'Lovesueee'; // 给$scope赋值
        this.name = 'maxin'; // 给controller实例赋值
        $scope.color = function () {
            $scope.fontCss = "red";
        }
    });

    angular.module('myApp').directive('myDirective', function () {
        return {
            controller: 'MainCtrl',
            link: function (scope, elem, attrs, ctrl) {
                console.log(ctrl, scope);
            }
        }
    });


