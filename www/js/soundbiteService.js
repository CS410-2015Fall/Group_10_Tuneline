angular.module('soundbiteService', [])

.factory('SoundbiteService', function($cordovaMedia) {
  var mediaObject;
  return {
    initPlayer: function(fileName, returnDurationFunction){
        mediaObject = $cordovaMedia.newMedia(fileName);
        if(mediaObject){
          mediaObject.play();
          mediaObject.stop();
        }
        mediaControllerRepeater = window.setInterval(function(){
          
          var duration = mediaObject.getDuration();
          if(duration > 0){
            returnDurationFunction(duration);
            window.clearInterval(mediaControllerRepeater);
          }
        },100);
      
      },
      /*
      fileName: string
        full path to where the file will be stored
      statusCallbackFunction: function(status)
        will be called when the media status changes, status is an int
      */
      startRecording: function(fileName){
        mediaObject = $cordovaMedia.newMedia(fileName);
        console.log('mediaObject: '+JSON.stringify(mediaObject));
        mediaObject.startRecord();
        return mediaObject;
      },

      stopRecording: function(mediaObject){
        if(mediaObject){
          mediaObject.stopRecord();
          mediaObject.release();
        }
      },

      playMedia:  function(fileName){
          if(mediaObject){
            mediaObject.stop();
          }
          mediaObject = $cordovaMedia.newMedia(fileName);
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
      }
  };
});
