var app = angular.module( 'priyanka_wall', ['ngRoute','ngCookies'])
app.config(function($routeProvider){
    $routeProvider

        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        .when('/wall', {
            templateUrl: 'partials/wall.html',
            controller: 'wallController'
        })

        .when('/postcomment', {
            templateUrl: 'partials/postcomment.html',
            controller: 'postcommentController'
        })


        .otherwise({
        redirectTo:'/home'

        })

})