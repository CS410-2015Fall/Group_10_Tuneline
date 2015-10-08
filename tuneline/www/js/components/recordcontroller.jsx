var recordButtonMedia;

module.exports = {
	startRecording : function(fileName){
		recordButtonMedia = new Media(cordova.file.applicationStorageDirectory+'/'+fileName);
		recordButtonMedia.startRecord();
		alert(cordova.file.applicationStorageDirectory);
		// var options = { limit: 1, duration: 10 };
		// navigator.device.capture.captureAudio(function(mediaFiles){
		// 	console.log(mediaFiles);
		// }, function(error) {
		// 	console.log(error);
		// } , options);
	},

	stopRecording : function(){
		recordButtonMedia.stopRecord();
	}

};