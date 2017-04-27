// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    
    
    $scope.start = '';
    $scope.stop = '';
    
    
    $scope.characters = 5;
    
    $scope.clips = [
        {id: 1,
         timeInfo:{
            start:1,
            stop: 1
            }
        },
        {id: 2,
        timeInfo:{
            start:1,
            stop: 1
            }
        },
        {id: 3,
        timeInfo:{
            start:1,
            stop: 1
            }
        }
    ]

    $scope.saveClip = function(){
        console.log('butt')
        $scope.clips.push({
            id: $scope.clips.length,
            timeInfo: {
                start: $scope.start,
                stop: $scope.stop
            }
        })
    }
    console.log($scope.clips)
}]);



