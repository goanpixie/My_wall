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
             console.log($scope.user)
        })
    };
    $scope.getUser();


    $scope.addPost = function() {
        console.log($scope.newPost)
        $scope.newPost.userid = $scope.newUser._id;
        $scope.newPost.name = $scope.newUser.name;
        userFactory.addPost($scope.newPost, function(data) {
            console.log("***********")
            console.log(data)
             console.log("***********")
            $scope.messages = [];
            $scope.newPost = {}
            if (data.errors) {
                $scope.errors = true;
                for (err in data.errors) {
                    console.log(data.errors[err].message)
                    $scope.messages.push(data.errors[err].message)
                }
            }
        $scope.newPost = {}
        $scope.getPost();
        })
        
    }


    $scope.getPost = function() {
        userFactory.getPost(function(data) {
              console.log("-------------------")
            console.log(data)
             console.log("---------------------")
            $scope.posts = data
            
        })
    };
    $scope.getPost();



    $scope.findPost = function(id) {
        console.log("I am @front end Controller")
        userFactory.findPost(id, function() {
            $scope.getposts();
        })
    }

        $scope.logout = function(){
        userFactory.clearuser(function(data){
            $scope.user = data;
        })
        $location.url('/home')
    }




}])
