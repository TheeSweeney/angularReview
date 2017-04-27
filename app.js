// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    
    
    $scope.handle = ''
    
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle)
    }
    
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
    for(var i = 0; i < $scope.clips.length; i++){
        $log.log($scope.clips[i].timeInfo.start)
    }
        $scope.alertClick = function(){
            alert('sup')
        }
}]);



