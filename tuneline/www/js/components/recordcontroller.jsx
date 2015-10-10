var recordButtonMedia;
var currentStatus = 0;

module.exports = {
	startRecording: function(fileName){
		recordButtonMedia = new Media(fileName, success, failure, status);
		recordButtonMedia.startRecord();
	},

	stopRecording: function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stopRecord();
			recordButtonMedia.release();
		}
	},

	playMedia:  function(fileName){
		if(recordButtonMedia !== null){
			recordButtonMedia = new Media(fileName, success, failure, status);
			recordButtonMedia.play();
		}
	},

	stopMedia:  function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stop();
			recordButtonMedia.release();
		}
	},

	resetMedia: function(){
		recordButtonMedia.release();
		recordButtonMedia = null;
		currentStatus = 0;
	},

	mediaStatus: function(){
		return {
					file: recordButtonMedia?recordButtonMedia.src:null,
					status: currentStatus
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
	var event = new Event('mediaChange');
	document.dispatchEvent(event);
}

//	mediaStatus
//     Media.MEDIA_NONE = 0;
//     Media.MEDIA_STARTING = 1;
//     Media.MEDIA_RUNNING = 2;
//     Media.MEDIA_PAUSED = 3;
//     Media.MEDIA_STOPPED = 4;
