angular.module('soundbiteCntl', [])

.controller('SoundbiteCntl', function($scope, $rootScope, $stateParams, $interval,
                                         $cordovaDevice, $cordovaFile, $cordovaMedia, 
                                         $cordovaGeolocation, $cordovaInAppBrowser, $location,
                                         $ionicPopover, $ionicListDelegate, SaveService,DatabaseService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.soundbiteId = $stateParams.soundbiteId;

  $scope.Math = window.Math; //So i can use Math functions in the template

  $scope.buttonState = 'record';
  $scope.platform;

  $scope.fileName;
  $scope.mediaObject; //The media obj. (file) that we can record/play/pause etc.
  $scope.mediaStatus = 0; //the status of the media plugin

  $scope.timer = 0; //the timer that is shown on the screen

  $scope.mediaLength = 0; //the length of the currently loaded file ($scope.mediaObject)
  $scope.mediaPosition = {pos: "0"}; //the position within the file ($scope.mediaObject)

  $scope.soundbiteObj = {fileName: null};
  $scope.gpsLocation = {
            lat: 0,
            lng: 0,
            accuracy: 0,
            altitude: 0,
            name: 'default location name'
  };
  var mediaPositionPromise; //for holding the promise for the position updater
  var timerInterval; //used for holding the promise for the timer updater

  document.addEventListener("deviceready", function() {
    $scope.platform = $cordovaDevice.getPlatform();
  }, false);


  //Bind an event to the changing of the slider, but check to see if it is actually on the page
  var sliderElement = document.getElementById('mediaPositionSlider');
  if(sliderElement){
    sliderElement.addEventListener('touchend',function(){
        $scope.seekTo(Number($scope.mediaPosition.pos));
      }, false);
  }

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
      fileName = cordova.file.externalApplicationStorageDirectory + 'files/' + fileName + '.m4a';
    } else if($scope.platform === 'iOS'){
      fileName = fileName + '.wav';
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
  $scope.initPlayer = function(fileName){
      $scope.mediaObject = new Media(fileName,function(){
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
          mediaPositionPromise = null;
          $scope.mediaPosition.pos = 0;
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

  $scope.playMedia = function(positionInMilliSeconds){
    $scope.mediaObject.play();
    if($scope.mediaStatus !== 3){
      $scope.mediaObject.seekTo(positionInMilliSeconds);
    }
    //dynamically update the current position, used as the seeker position
    $scope.getCurrentPosition();
  }

  $scope.pauseMedia = function(){
    $scope.mediaObject.pause();
  }

  $scope.stopMedia = function(){
    $scope.mediaObject.stop();
  }

  $scope.seekTo = function(positionInMilliSeconds){
    if($scope.mediaStatus === 4){
      $scope.mediaObject.play();
      $scope.mediaObject.pause();
    }
    $scope.mediaObject.seekTo(positionInMilliSeconds);


  };

  $scope.startTimer = function(){
    timerInterval = $interval(function(){
      $scope.timer++;
    },100);
  };

  //Private function that is used by $scope.play()
  $scope.getCurrentPosition = function(){
    if(mediaPositionPromise){
      $interval.cancel(mediaPositionPromise);
      mediaPositionPromise = null;
    }
    var positionCallBack = function(position){
      if (position >= 0) {
        $scope.mediaPosition.pos = position*1000;
      }
    };
    mediaPositionPromise = $interval(function(){
        if($scope.mediaStatus !== 4){
          $scope.mediaObject.getCurrentPosition(positionCallBack);
        } else{
          $scope.mediaStatus = 0;
          mediaPositionPromise = null;
          $scope.mediaPosition.pos = 0;
        }

    },50);
  }

  $scope.resetMedia = function(){
    if($scope.mediaObject){
      $scope.mediaObject.stop();
      $scope.mediaObject.release();
      $scope.mediaObject = null;
    }
  }

  $scope.getGpsLocation = function(){
    var gpsOptions = {timeout: 5000, enableHighAccuracy: true, maximumAge:10000};
    var gpsSuccess = function(position){
       $scope.gpsLocation.lat = position.coords.latitude;
       $scope.gpsLocation.lng = position.coords.longitude;
       $scope.gpsLocation.accuracy = position.coords.accuracy;
       $scope.gpsLocation.altitude = position.coords.altitude;

       console.log('************GPS SUCCESS: '+ JSON.stringify(position.coords) );
    };

    var gpsError = function(){
      console.log('************GPS ERROR');
       $scope.getGpsLocation();
    };

    navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError, gpsOptions);
  };

  $scope.save = function(soundbiteObj,locationObj,fileName,mediaLength){
    var soundbite = soundbiteObj;
    soundbite.position = locationObj;
    soundbite.fileName = fileName;
    soundbite.mediaLength = mediaLength;

    if(!soundbite.name){
      soundbite.name = new Date().toLocaleString();
    }

    DatabaseService.saveSound(soundbite);
    console.log('************SOUNDBITE: '+ JSON.stringify(soundbite));
    $location.path('/tab/tuneline');
  };

  $scope.targetUrl;
  $scope.openBrowser = function(targetUrl){
    $cordovaInAppBrowser.open(targetUrl,'_blank',{});
  };


  $scope.playlists = [];
  $scope.openAddToPlaylist = function($event){
    $scope.popoverAdd.show($event);
  };

  $scope.closeAddToPlaylist = function(){
    $scope.popoverAdd.hide();
    $scope.showDeletePlaylist = false;
  };

  $scope.playlistId = {selected: ''};
  $scope.saveToPlaylist = function(sid,pid){
    console.log(sid+' : '+pid);
    DatabaseService.saveSoundToPlaylist(parseInt($scope.soundbiteObj.id), parseInt($scope.playlistId.selected),function(results){});
    $scope.popoverAdd.hide();
    $scope.playlistId = {selected: ''};
  };

  $scope.openCreatePlaylist = function($event){
    $scope.popoverCreate.show($event);
  };

  $scope.closeCreatePlaylist = function(){
    $scope.popoverCreate.hide();
  };

  $scope.newPlaylist = {name:''};
  $scope.createPlaylist = function(){
    console.log($scope.newPlaylist.name);
    DatabaseService.savePlaylist({name: $scope.newPlaylist.name});
    $scope.popoverCreate.hide();
    $scope.popoverAdd.hide();
    DatabaseService.getPlaylists(function(results){
      $scope.playlists = results;
    });
    $scope.newPlaylist.name = '';
  };

  $scope.shareFacebook = function(){

  };

  $scope.showDeletePlaylist = false;
  $scope.toggleDeletePlaylist = function(){
    if($scope.showDeletePlaylist){
      $scope.showDeletePlaylist = false;
    } else{
      $scope.showDeletePlaylist = true;
    }
  };

  $scope.deletePlaylist = function(pid){
    console.log(pid);
    DatabaseService.removePlaylist(pid, function(results){
      DatabaseService.getPlaylists(function(results){
        $scope.playlists = results;
      });
    });
  };

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      code: 'window.location.href;'
    })
    .then(fillUrl);
  });

  var fillUrl = function(siteUrl){
    $scope.soundbiteObj.url = siteUrl;
    console.log('*****************Site url:'+siteUrl);
  };  

  var getCurrentSoundbite = function(results){
    console.log('TESTING*************************************************'+results.length);
    if(results && results.length > 0){
      console.log('*****************SINGLE SOUNDBITE:'+JSON.stringify(results[0]));
      $scope.soundbiteObj = {};
      $scope.soundbiteObj = results[0];
      if($scope.soundbiteObj.fileName !== 'undefined'){
        $scope.initPlayer($scope.soundbiteObj.fileName);
      }
    }      
  }

  if($scope.soundbiteId){
    DatabaseService.getSoundsById(parseInt($scope.soundbiteId), getCurrentSoundbite);
    console.log('TESTING***********************************');
  }

  $ionicPopover.fromTemplateUrl('playlist.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popoverAdd = popover;
    DatabaseService.getPlaylists(function(results){
      //console.log('Playlists: ' + JSON.stringify(results));
      $scope.playlists = results;
    });
  });

  $ionicPopover.fromTemplateUrl('createPlaylist.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popoverCreate = popover;
  });

  $scope.getGpsLocation();
});
  