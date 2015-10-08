module.exports = {
  startRecording : function(fileName){
		var media = new Media(fileName);
		media.startRecord();
		alert('Supposed to have started recording.');
	}

};