var controllers = angular.module('myPalApp.controllers', []);

controllers.controller('welcomeController', ['$scope', '$location', function($scope, $location) {
    
    $scope.test = function() {
        $location.path('/paliWord/' + $scope.getWord);
    };
}]);

controllers.controller('paliWordController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var newWord = $routeParams.getWord;
    var lowerWord = newWord.toLowerCase();
    $scope.firstWord = lowerWord;
    var reverseWord = '';
    for (var i = lowerWord.length - 1; i >= 0; i--) {
        reverseWord += lowerWord[i];
    }
    $scope.wordAnswer = '';
    $scope.reverseWord = reverseWord;
    if (lowerWord === reverseWord) {
        $scope.wordAnswer = 'Your word is a Palindrome!!!';
    } else {
        $scope.wordAnswer = "Nope. Not this time...";
    }
}]);