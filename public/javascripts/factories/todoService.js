/**
 * Created by lenovo on 2017/8/11.
 */
(function () {
    angular.module('TodoApp', [])
        .factory('TodoService', ['$http', function ($http) {
            var server={
                todoList: _getTodoList,
                createTodo: _createTodo,
                deleteTodo: _deleteTodo,
                updateTodo: _updateTodo
            };
            function _getTodoList() {
                return $http.get('/api/todos');
            }
            function _createTodo(todo) {
                return $http({
                    method: 'POST',
                    url: '/api/todo',
                    data: todo
                })
            }
            function _deleteTodo(id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/todo/' + id
                })
            }
            function _updateTodo(todo) {
                return $http({
                    method: 'PUT',
                    url: '/api/todo/' + todo._id,
                    data: todo
                })
            }
            return server;
        }]);
})();
