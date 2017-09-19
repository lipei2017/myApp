/**
 * Created by lenovo on 2017/8/10.
 */
angular.module('myApp').factory('DataService',['$http','$location','$q',function ($http,$location,$q) {
    var isPrimed = false;
    var primePromise;

    var server = {
        getAvengers: getAvengers
    };

    return server;

    function getAvengers() {
        return $http.get('/api/maa')
            .then(getAvengersComplete)
            .catch(getAvengersFailed);

        function getAvengersComplete(response) {
            return response.data.results;
        }
        function getAvengersFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
    }
}]);
