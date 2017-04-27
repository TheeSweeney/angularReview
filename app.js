// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    

    $scope.currentStart = 2;
    $scope.currentEnd = 52
    $scope.name = "Clip 1";
    $scope.start;
    $scope.stop;
        
    $scope.clips = [
        {
        id: 0,
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

    $scope.playClip = function(timeInfo){
        var fragmentSuffix = "#t=" + timeInfo.start + ',' + timeInfo.stop;
        console.log(fragmentSuffix)
        
        document.getElementById('videoWindow')
                .setAttribute('ng-src', 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4' + fragmentSuffix)
    }
}]);



