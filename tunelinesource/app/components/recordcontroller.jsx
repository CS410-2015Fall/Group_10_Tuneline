var recordButtonMedia;
var currentStatus = 0;
var currentAction = '';

module.exports = {
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
		if(recordButtonMedia !== null){
			recordButtonMedia = new Media(fileName, success, failure, status);
			currentAction = 'PLAYING';
			recordButtonMedia.play();			
		}
	},

	stopMedia:  function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stop();
			recordButtonMedia.release();
			currentAction = '';
		}
	},

	resetMedia: function(){
		recordButtonMedia.release();
		recordButtonMedia = null;
		currentStatus = 0;
		currentAction = '';
		status();
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
	//TODO: figure out if we need this function
}

var failure = function(error){
	alert('error: '+error.code+' : ' + error.message);
}

var status = function(mediaStatus){
	//update the current status of the controller
	currentStatus = mediaStatus;

	//emit a mediaChange event for the components to listen to
	var event = new Event('mediaChange');
	document.dispatchEvent(event);
}

//	mediaStatus REFERENCE
//     Media.MEDIA_NONE = 0;
//     Media.MEDIA_STARTING = 1;
//     Media.MEDIA_RUNNING = 2;
//     Media.MEDIA_PAUSED = 3;
//     Media.MEDIA_STOPPED = 4;
