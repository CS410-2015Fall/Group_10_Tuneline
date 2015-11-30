angular.module('friendsCntl', [])

.controller('FriendsCntl', function($scope, DatabaseService) {
    $scope.soundbites = [];
    
    var sb1 = {
        id: 1,
        datetime: "Mon 30",
        name: "James's SB 3"
    };
    var sb2 = {
        id: 2,
        datetime: "Sat 28",
        name: "James's SB 2",

    };
    var sb3 = {
        id: 3,
        datetime: "Fri 27",
        name: "James's SB 1"
    };

    $scope.soundbites.push(sb1);
    $scope.soundbites.push(sb2);
    $scope.soundbites.push(sb3);

    $scope.currentPlayingStatus = "paused";
    $scope.nowPlaying = null;

    $scope.pauseStatus = function() {
        $scope.currentPlayingStatus = "paused";
        $scope.nowPlaying = null;
    }

    $scope.togglePause = function() {
        var element = document.querySelector('#audioPlayer');
        element.pause();
        $scope.nowPlaying = null;
        $scope.currentPlayingStatus = "paused";
    }

    $scope.togglePlaying = function(id) {
        alert(id);
        $scope.nowPlaying = id;
        var element = document.querySelector('#audioPlayer');
        element.play();
        $scope.currentPlayingStatus = "playing";
    }

});