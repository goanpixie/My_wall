app.controller('wallController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {
    $scope.newUser = {};
    $scope.errors = false;
    $scope.messages = [];
    $scope.newPost ={};


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


    $scope.addPost = function() {
        $scope.newPost.userid = $scope.newUser._id;
        $scope.newPost.name = $scope.newUser.name;
        userFactory.addPost($scope.newPost, function(data) {
            console.log(data)
            $scope.messages = [];
            if (data.errors) {
                $scope.errors = true;
                for (err in data.errors) {
                    console.log(data.errors[err].message)
                    $scope.messages.push(data.errors[err].message)
                }
            }

        })
        $scope.getPost();
    }


    $scope.getPost = function() {
        userFactory.getPost(function(data) {
            $scope.posts= data
        })
    };
    $scope.getPost();



}])
