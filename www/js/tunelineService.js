angular.module('tunelineService', [])

.factory('TunelineService', ['DatabaseService', TunelineService]);

function TunelineService (DatabaseService){

	// ********************** ATTEMPT TO FETCH ALL SOUNDBITES FROM DB **********************
	var allSoundbites = {};

	var soundbitesCallback = function(result){
		console.log("result = " + JSON.stringify(result));
		allSoundbites = result;
	};

	DatabaseService.getSounds(soundbitesCallback);

	console.log("allSoundbites = " + JSON.stringify(allSoundbites));
	// **************************************************************************************


	//TODO: Remove this hard-coded data getter once the above implementation works
	function getSoundbites(){
        var soundbite0 = JSON.parse('{"id": "aDbGeneratedId0000", "type": "default", "name": "My soundbite0", "datetime": "Thu Nov 19 2015 15:51:41 GMT-0800 (PST)", "filename": "somefile.mp4", "mediaLength": 223, "url": "http://www.youtube.com","tags": "#yoloswag","photo": "somephoto.jpg","author": "anAuthorId0000","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name": "location name"}}');
        var soundbite1 = JSON.parse('{"id": "aDbGeneratedId0001", "type": "default", "name": "My soundbite1", "datetime": "Tue Nov 17 2015 15:54:41 GMT-0800 (PST)", "filename": "somefile1.mp4", "mediaLength": 341, "url": "http://www.youtube.com","tags": "#prom","photo": "somephoto3.jpg","author": "anAuthorId0001","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name1": "location name1"}}');
        var soundbite2 = JSON.parse('{"id": "aDbGeneratedId0002", "type": "default", "name": "My soundbite2", "datetime": "Mon Oct 19 2015 15:21:41 GMT-0800 (PST)", "filename": "somefile2.mp4", "mediaLength": 183, "url": "http://www.youtube.com","tags": "#india","photo": "somephoto2.jpg","author": "anAuthorId0002","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name2": "location name2"}}');
        var soundbites = [soundbite0, soundbite1, soundbite2];  
		return soundbites;
	};

	return {
		getSoundbites: getSoundbites, // TODO: Make sure getSoundbites encapsulates fetching from DB instead of hard-coded data.
	};



};
