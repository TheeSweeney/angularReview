// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    
    
    $scope.handle = ''
    
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle)
    }
    
    $scope.characters = 5;
}]);



