// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    
    
    $scope.handle = ''
    
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle)
    }
    
    $scope.characters = 5;
    
    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be use elsewhere"},
        {rulename: "Must be cool. No Dweebs"}
    ]
}]);



