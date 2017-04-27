// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$log', function ($scope, $filter, $log) {
    

    $scope.currentStart = 2;
    $scope.currentEnd = 52
    $scope.name = "Clip 1";
    $scope.start;
    $scope.stop;
    $scope.counter = 1;
        
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
        

        $scope.clips.push({
            id: $scope.counter,
            name: $scope.name,
            timeInfo: {
                start: $scope.start,
                stop: $scope.stop
            }
        })

        $scope.counter++;

        $scope.name = 'Clip ' + $scope.counter
        $scope.start = null;
        $scope.stop = null;
    }

    $scope.playClip = function(timeInfo){
        var fragmentSuffix = "#t=" + timeInfo.start + ',' + timeInfo.stop;
        
        document.getElementById('videoWindow')
                .setAttribute('ng-src', 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4' + fragmentSuffix)
    }

    $scope.deleteClip = function(id){
        console.log($scope.clips.length)
        for(var i = 0; i < $scope.clips.length; i++){
                console.log('here')
            if($scope.clips[i].id == id && id !== 0){
              $scope.clips.splice(i,1);
              return;  
            } 
        }
    }
}]);



