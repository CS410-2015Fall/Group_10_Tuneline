angular.module('friendsCntl', [])

.controller('FriendsCntl', function($scope, $http, $stateParams, DatabaseService) {
    $scope.result = null;
    $scope.friendId = $stateParams.fbId;
    $scope.name = $stateParams.fName;
    console.log("######FRIEND ID###### : " + $scope.friendId);
    $scope.soundbites = [];
    $scope.friends = [];

    var friendsCB = function(rows) {
        $scope.friends = rows;
        // console.log(JSON.stringify(rows));
    }
    DatabaseService.getFriends(friendsCB);
    $scope.updateFriends = function() {
        DatabaseService.getFriends(friendsCB);
    }

    var soundbitesCB = function(rows) {
        var obj = JSON.parse(JSON.parse(rows[0].data));
        console.log("Retrieved soundbites");
    }
    DatabaseService.getFriendSoundbites($scope.friendId, soundbitesCB);

    $scope.syncFriendTuneline = function(id) {
        var url = "http://159.203.246.24/getMeta.php";
        var data = {"id": id};
        $http.post(url, data)
        .then(function (result) {
            console.log("Requested metadata from server for id=" + id);
            var meta = result.data;
            // alert(JSON.stringify(meta));
            $scope.soundbites = meta;
            console.log(JSON.stringify(meta));
            DatabaseService.saveFriendSoundbites(id, meta);
        });
    }

    if ($scope.friendId && $scope.name) {
        $scope.syncFriendTuneline($scope.friendId);
        // alert("fetching new tuneline for "+$scope.name);
    }

    // var sb1 = {
    //     id: 1,
    //     datetime: "Mon 30",
    //     name: "James's SB 3",
    //     mp3url: "asdf"
    // };
    // var sb2 = {
    //     id: 2,
    //     datetime: "Sat 28",
    //     name: "James's SB 2",
    //     mp3url: "asdf"
    // };
    // var sb3 = {
    //     id: 3,
    //     datetime: "Fri 27",
    //     name: "James's SB 1",
    //     mp3url: ""
    // };

    // $scope.soundbites.push(sb1);
    // $scope.soundbites.push(sb2);
    // $scope.soundbites.push(sb3);

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
        alert("id="+id);
        $scope.nowPlaying = id;
        var sbElement = document.querySelector('#'+id);
        var url = sbElement.getAttribute('data-url')
        alert(url);
        $scope.updateSource(url);
        var playerElement = document.querySelector('#audioPlayer');
        playerElement.play();
        $scope.currentPlayingStatus = "playing";
    }

    $scope.updateSource = function(url) {
        var srcElement = document.querySelector('#audioSource');
        srcElement.src = url;
    }

    $scope.test = function() {
        alert($scope.soundbites);
    }

});