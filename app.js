// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    
    
    $scope.handle = ''
    
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle)
    }
    
    $scope.$watch('handle', function(newValue, oldValue) {
        $log.info('Changed')
        $log.log('Old: ' + oldValue);
        $log.log('New: ' + newValue);
    })
}]);



