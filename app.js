// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    
    $scope.name = "Clip 1";
    $scope.start;
    $scope.stop;
        
    $scope.clips = [
        {
        id: 1,
        name: "Full Clip",
        timeInfo:{
            start:0,
            stop: 52
            }
        }
    ]

    $scope.saveClip = function(){
        console.log()
        $scope.clips.push({
            id: $scope.clips.length,
            name: $scope.name,
            timeInfo: {
                start: $scope.start,
                stop: $scope.stop
            }
        })

        $scope.name = 'Clip ' + $scope.clips.length
        $scope.start;
        $scope.stop;
    }
}]);



