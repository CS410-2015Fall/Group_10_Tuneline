angular.module('playlistCntl', [])

.controller('PlaylistCntl', function($scope, $stateParams, DatabaseService) {

  $scope.playlistId = $stateParams.playlistId;

  $scope.playlists = [];

  $scope.playlist = [];  

  $scope.getAll = function(){
    DatabaseService.getPlaylists(function(results){
      $scope.playlists = results;
    });

    if($scope.playlistId){
      DatabaseService.getPlaylistSounds(parseInt($scope.playlistId),function(results){
        $scope.playlist = results;
      });
    }
  }

  $scope.doRefresh = function() {
        console.log("(************** refreshed...");
        $scope.getAll(); 
        $scope.$broadcast('scroll.refreshComplete'); // Stop the ion-refresher from spinning
        $scope.$apply();
  };

  $scope.getAll();

});
  