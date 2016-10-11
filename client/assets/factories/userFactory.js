app.factory('userFactory', ['$http', function($http) {
    function userFactory() {

		this.createUser= function(newUser, callback){
			console.log("I am in Factory")
		            $http.post('/createUser', newUser).then(function(returned_data){
		                callback(returned_data.data)
		            })
		        }

        this.getUser = function(callback) {
            $http.get('/get_user').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

        this.addPost = function(post, callback) {
            console.log("I am in addPost method-->factory" + post)
            $http.post('/add_post', post).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getPost = function(callback) {
            $http.get('/get_post').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })
        }

}

    return new userFactory();
}])