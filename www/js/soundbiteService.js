angular.module('soundbiteService', [])

.factory('SoundbiteService', function($cordovaMedia) {
  var mediaObject;
  var mediaLength;
  var mediaStatus = 0;
  return {
    initPlayer: function(fileName){
        mediaObject = $cordovaMedia.newMedia(fileName);
        if(mediaObject){
          mediaObject.play();
          mediaObject.stop();
        }
        mediaControllerRepeater = window.setInterval(function(){
          
          var duration = mediaObject.getDuration();
          if(duration > 0){
            mediaLength = duration;
            window.clearInterval(mediaControllerRepeater);
          }
        },100);
      
      },
      
    // Media.MEDIA_NONE = 0;
    // Media.MEDIA_STARTING = 1;
    // Media.MEDIA_RUNNING = 2;
    // Media.MEDIA_PAUSED = 3;
    // Media.MEDIA_STOPPED = 4;

      startRecording: function(fileName){
        mediaObject = new Media(fileName,function(){
          console.log('*#*#*#*#*#mediaObject SUCCESS: '+ status);
        }, function(){
          console.log('*#*#*#*#*#mediaObject STATUS (record): '+ status);
        }, function(status){
           console.log('*#*#*#*#*#mediaObject STATUS (record): '+ status);
           mediaStatus = status;
        });
        mediaObject.startRecord();
      },

      stopRecording: function(mediaObject){
        if(mediaObject){
          mediaObject.stopRecord();
          mediaObject.release();
          mediaObject = null;
        }
      },

      playMedia:  function(fileName){
          if(mediaObject && mediaStatus !== 0){
            mediaObject.stop();
          }
          mediaObject = new Media(fileName,function(){

          }, function(){

          }, function(status){
             console.log('*#*#*#*#*#mediaObject STATUS (record): '+ status);
             mediaStatus = status;
          });
          mediaObject.play();
      },

      pauseMedia:  function(){
        if(mediaObject){
          mediaObject.pause();      
        }
      },

      stopMedia:  function(){
        if(mediaObject){
          mediaObject.stop();
        }
      },

      resetMedia: function(){
        if(mediaObject){
          mediaObject.release();
        }
      },

      seekTo: function(position){
        if(mediaObject){
          mediaObject.seekTo(position);
        }
      },

      getMediaStatus: function(){
        return mediaStatus;
      }
  };
});
