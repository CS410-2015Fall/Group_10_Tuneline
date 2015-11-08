var mediaObject;

var mediaControllerRepeater; 

module.exports = {
	initPlayer: function(fileName, returnDurationFunction){
		mediaObject = new Media(fileName);
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
	startRecording: function(fileName, statusCallbackFunction){
		mediaObject = new Media(fileName, success, failure, statusCallbackFunction);
		console.log('mediaObject: '+JSON.stringify(mediaObject));
		mediaObject.startRecord();		
	},

	stopRecording: function(){
		if(mediaObject){
			mediaObject.stopRecord();
			mediaObject.release();
		}
	},

	playMedia:  function(fileName,statusCallbackFunction){
		if(!mediaObject){
			mediaObject = new Media(fileName, success, failure, statusCallbackFunction);
		}
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
		if(mediaObject)
			mediaObject.release();
		mediaObject = null;
	},

	getCurrentPosition: function(updateTimeFunction){
		mediaObject.getCurrentPosition(function(position){
			if (position > -1) {
				updateTimeFunction(position);
            }
		});
	},

	seekTo: function(position){
		if(mediaObject !== null){
			mediaObject.seekTo(position);
		}
	}

};


var success = function(){

}

var failure = function(error){
	alert('RecordController error: '+error.code+' : ' + error.message);
}

//	mediaStatus REFERENCE
//     Media.MEDIA_NONE = 0;
//     Media.MEDIA_STARTING = 1;
//     Media.MEDIA_RUNNING = 2;
//     Media.MEDIA_PAUSED = 3;
//     Media.MEDIA_STOPPED = 4;
