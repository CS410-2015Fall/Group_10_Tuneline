angular.module('soundbiteCntl', [])

.controller('SoundbiteCtrl', function($scope, $cordovaDevice, 
                                        $cordovaFile, $cordovaMedia, $interval) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.Math = window.Math; //So i can use Math functions in the template
  
  $scope.buttonState = 'record';
  $scope.platform;
  $scope.fileName; //The filename of the currently recording or loaded/playing file

  $scope.mediaObject; //The media obj. (file) that we can record/play/pause etc.
  $scope.mediaStatus = 0; //the status of the media plugin
  
  $scope.timer = 0; //the timer that is shwon on the screen
  
  $scope.mediaLength = 0; //the length of the currently loaded file ($scope.mediaObject)
  $scope.mediaPosition = 0; //the position within the file ($scope.mediaObject)

  var mediaPositionPromise; //for holding the promise for the position updater
  var timerInterval; //used for holding the promise for the timer updater

  document.addEventListener("deviceready", function() {
    $scope.platform = $cordovaDevice.getPlatform();
  }, false);


  $scope.getButtonFunction = function(stateString){
    if(stateString == 'record') $scope.record();
    if(stateString == 'stop') $scope.stopRecording(); 
  };

  $scope.record = function() {
    if($scope.mediaObject){
      //TODO: check to see if already recording
    }    
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
    $scope.fileName = fileName; //Our new media file name

    //Create the new media object so we can record to it
    $scope.mediaObject = new Media(fileName,function(){
      console.log('*#*#*#*#*#mediaObject SUCCESS');
    }, function(){
      console.log('*#*#*#*#*#mediaObject ERROR');
    }, function(status){
      console.log('*#*#*#*#*#mediaObject STATUS (record): '+ status);
      $scope.mediaStatus = status;       
      if(status === 2){
        $scope.buttonState = 'stop';
        $scope.startTimer();
      }   
    });
    $scope.mediaObject.startRecord();
      
  };

  $scope.stopRecording = function(){
    $scope.mediaObject.stopRecord();
    $interval.cancel(timerInterval);
    $scope.buttonState = 'record';
    $scope.timer = 0;
    $scope.initPlayer($scope.fileName);
  };

  //Use this function to create a media player with duration
  //play/pause and stop will depend on this function being called first
  $scope.initPlayer = function(filename){
      $scope.mediaObject = new Media(filename,function(){
        console.log('*#*#*#*#*#mediaObject SUCCESS');
      }, function(){
        console.log('*#*#*#*#*#mediaObject ERROR');
      }, function(status){
         console.log('*#*#*#*#*#mediaObject STATUS (Play): '+ status);
         $scope.mediaStatus = status;
         if(status == 3)
          $interval.cancel(mediaPositionPromise);
         else if(status == 4){
          $interval.cancel(mediaPositionPromise);
          $scope.mediaPosition = 0;
         }
      });

      //We need to play, stop, then keep trying to get the length a few times
      //This is a quirk of the plugin
      $scope.mediaObject.play();
      $scope.mediaObject.stop();

      var interval = $interval(function(){
        var duration = $scope.mediaObject.getDuration();
        if(duration > 0){
          $scope.mediaLength = duration;
          $interval.cancel(interval);
        }
      },100);
  }

  $scope.playMedia = function(){
    //TODO:new to get slider position first 
    $scope.mediaObject.play();    
    //dynamically update the current position, used as the seeker position
    getCurrentPosition();
  }

  $scope.pauseMedia = function(){
    $scope.mediaObject.pause();
  }

  $scope.stopMedia = function(){
    $scope.mediaObject.stop();
  }

  $scope.seekTo = function(position){
    $scope.mediaObject.seekTo(position);
  };

  $scope.startTimer = function(){
    timerInterval = $interval(function(){
      $scope.timer++;
    },100);
  };

  //Private function that is used by $scope.play()
  var getCurrentPosition = function(){
    var positionCallBack = function(position){       
      if (position > 0) {
        $scope.mediaPosition = position;
        console.log('******************************** '+position+' ********************************');
      }
    };
    mediaPositionPromise = $interval(function(){
      $scope.mediaObject.getCurrentPosition(positionCallBack);
    },50);
  }

  $scope.resetMedia = function(){
    if($scope.mediaObject){
      $scope.mediaObject.stop();
      $scope.mediaObject.release();
      $scope.mediaObject = null;
    }
  }

});
