app.controller('homeController', ['$scope', '$location', 'userFactory', '$cookies',function($scope, $location, userFactory, $cookies) {

$scope.errors = false;
$scope.messages = [];
$scope.newUser = {};



    $scope.createUser = function(){
        userFactory.createUser($scope.newUser, function(data){
            $scope.messages =[]
            if(data.errors){
                $scope.errors = true;
                for (err in data.errors){
                    console.log(data.errors[err].message)
                    $scope.messages.push(data.errors[err].message)
                }
            }
            else{
                $cookies.putObject('newUser',{name: data.name, _id: data._id})
                $location.url('/wall')
            }
        })
	}

    this.getUser = function(req, res) {
        User.find({}).populate('_user').exec(function(err, users) {
            if (err) {
                res.json(err)
            } else {
                res.json(users)
            }
        })
    }

}])