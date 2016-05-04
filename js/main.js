var app = angular.module('myPalApp', [ngRoute]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeController'
    })
    .when('/paliWord/:getWord', {
        templateUrl: 'views/paliWord.html',
        controller: 'paliWordController'
    })
    .otherwise ({
        redirectTo: '/welcome'
    });
}])