var recordButtonMedia;
var currentStatus = 0;
var currentAction = '';

var mediaControllerRepeater; 

module.exports = {
	initPlayer: function(fileName, returnDurationFunction){
		recordButtonMedia = new Media(fileName);
		if(recordButtonMedia){
			recordButtonMedia.play();
			recordButtonMedia.stop();
		}
		mediaControllerRepeater = window.setInterval(function(){
			
			var duration = recordButtonMedia.getDuration();
			if(duration > 0){
				returnDurationFunction(duration);
			}
		},100);
	
	},

	startRecording: function(fileName){
		recordButtonMedia = new Media(fileName, success, failure, status);
		currentAction = 'RECORDING'
		recordButtonMedia.startRecord();		
	},

	stopRecording: function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stopRecord();
			recordButtonMedia.release();
			currentAction = '';
		}
	},

	playMedia:  function(fileName){
		if(recordButtonMedia === null){
			recordButtonMedia = new Media(fileName, success, failure, status);
		}
			currentAction = 'PLAYING';
			recordButtonMedia.play();
	},

	pauseMedia:  function(){
		if(recordButtonMedia !== null){
			currentAction = 'PAUSED';
			recordButtonMedia.pause();			
		}
	},

	stopMedia:  function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stop();
			currentAction = '';
		}
	},

	resetMedia: function(){
		if(recordButtonMedia)
			recordButtonMedia.release();
		recordButtonMedia = null;
		currentStatus = 0;
		currentAction = '';
		status();
	},

	getCurrentPosition: function(updateTimeFunction){
		recordButtonMedia.getCurrentPosition(function(position){
			if (position > -1) {
				updateTimeFunction(position);
            }
		});
	},

	seekTo: function(position){
		if(recordButtonMedia !== null){
			recordButtonMedia.seekTo(position);
		}
	},

	getDuration: function(){
		return recordButtonMedia.getDuration();
	},
	
	mediaStatus: function(){
		return {
					file: recordButtonMedia?recordButtonMedia.src:null,
					status: currentStatus,
					action: currentAction
				}
	}

};


var success = function(){

}

var failure = function(error){
	alert('error: '+error.code+' : ' + error.message);
}

var status = function(mediaStatus){
	//update the current status of the controller
	currentStatus = mediaStatus;

	//emit a mediaChange event for the components to listen to
	//do not emit status for MEDIA_STARTING
	if(mediaStatus !== 1){
		var event = new Event('mediaChange');
		document.dispatchEvent(event);
	}
	
}

//	mediaStatus REFERENCE
//     Media.MEDIA_NONE = 0;
//     Media.MEDIA_STARTING = 1;
//     Media.MEDIA_RUNNING = 2;
//     Media.MEDIA_PAUSED = 3;
//     Media.MEDIA_STOPPED = 4;
