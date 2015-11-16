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

  $scope.mediaObject = SoundbiteService.mediaObject;
  $scope.record = function() {
    console.log('Recording');
    var now = new Date();
    var fileName = now.getTime().toString();
    if($cordovaDevice.getPlatform() === 'Android'){
      fileName = cordova.file.externalApplicationStorageDirectory + 
              'files/' + fileName + '.m4a';
    } else if($cordovaDevice.getPlatform() === 'iOS'){
      fileName =  fileName + '.wav';
    } else{
      fileName = fileName + '.wav';
    }
    SoundbiteService.startRecording(fileName);
  };

  $scope.stopRecording
});
