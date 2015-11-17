angular.module('soundbiteCntl', [])

.controller('SoundbiteCtrl', function($scope, SoundbiteService, $cordovaDevice,
$cordovaFile) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.buttonState = 'record';
  $scope.platform;
  $scope.mediaObject = SoundbiteService.mediaObject;
  $scope.fileName;

  document.addEventListener("deviceready", function() {
    $scope.platform = $cordovaDevice.getPlatform();
  }, false);


  $scope.getButtonFunction = function(stateString){
    if(stateString == 'record') $scope.record();
    if(stateString == 'stop') $scope.stopRecording(); 
  };

  $scope.record = function() {
    if($scope.mediaObject){
      $scope.reset($scope.mediaObject);
    }
    console.log('Recording');     
    var now = new Date();
    var fileName = now.getTime().toString();

 
    if($scope.platform === 'Android'){
      fileName = cordova.file.externalApplicationStorageDirectory + 
              'files/' + fileName + '.m4a';
    } else if($scope.platform === 'iOS'){
      fileName =  fileName + '.wav';
    } else{
      fileName = fileName + '.wav';
    }
    $scope.fileName = fileName;
    SoundbiteService.startRecording(fileName);
    $scope.buttonState = 'stop';   
  };

  $scope.stopRecording = function(){
    SoundbiteService.stopRecording($scope.mediaObject);
    $scope.buttonState = 'record';
  };

  $scope.playMedia = function(filename){
    SoundbiteService.playMedia(filename);
  }

  $scope.pauseMedia = function(){
    SoundbiteService.pauseMedia();
  }

  $scope.stopMedia = function(){
    SoundbiteService.stopMedia();

  }

  $scope.stopMedia = function(){
    SoundbiteService.stopMedia();
  }

  $scope.seekTo = function(position){
    SoundbiteService.seekTo(position);
  };

  $scope.reset = function(){
    SoundbiteService.resetMedia($scope.mediaObject);
  };
});
