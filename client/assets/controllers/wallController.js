app.controller('wallController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {
    $scope.newUser = {};
    $scope.errors = false;
    $scope.messages = [];


    if ($cookies.getObject('newUser')) {
        $scope.newUser = $cookies.getObject('newUser')
    } else {
        $location.url('/')
    }


    $scope.getUser = function() {
        userFactory.getUser(function(data) {
            $scope.users = data
        })
    };
    $scope.getUser();




    $scope.logout = function() {
        $cookies.remove('newUser')
        $location.url('/')

    }


}])
