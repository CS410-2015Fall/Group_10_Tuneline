var recordButtonMedia;

module.exports = {
	startRecording : function(fileName){
		recordButtonMedia = new Media(fileName, success, failure, status);
		recordButtonMedia.startRecord();
	},

	stopRecording : function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stopRecord();
			recordButtonMedia.release();
			return recordButtonMedia.src
		}
	},

	playMedia :  function(fileName){
		if(recordButtonMedia !== null){
			recordButtonMedia = new Media(fileName, success, failure, status);
			recordButtonMedia.play();
		}
	},

	stopMedia :  function(){
		if(recordButtonMedia !== null){
			recordButtonMedia.stop();
			recordButtonMedia.release();
		}
	}

};

var success = function(){

}

var failure = function(error){
	alert('error: '+error.code+' : ' + error.message);
}

var status = function(){
	alert(recordButtonMedia.src);
}