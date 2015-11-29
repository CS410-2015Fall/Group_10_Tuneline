angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', 'DatabaseService', 'TunelineService', TunelineCntl]);

function TunelineCntl($scope, DatabaseService, TunelineService) {
	console.log("******************** in  TunelineCntl");

    $scope.soundbites = [];

	var soundbitesCallback = function(result){
		console.log("*****************result = " + JSON.stringify(result));
		$scope.soundbites = result;
	};

    $scope.getSoundbites = function () {
        DatabaseService.getSounds(soundbitesCallback);
        console.log("*****************scope.soundbites = " + JSON.stringify($scope.soundbites));
    };

    //Mock data for faster UI dev
    var useMockData = true;
    var soundbite0 = JSON.parse('{"id": "aDbGeneratedId0000", "type": "default", "name": "My soundbite0", "datetime": 1393113600, "filename": "somefile.mp4", "mediaLength": 223, "url": "http://www.youtube.com","tags": "#yoloswag","photo": "somephoto.jpg","author": "anAuthorId0000","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name": "location name"}}');
    var soundbite1 = JSON.parse('{"id": "aDbGeneratedId0001", "type": "default", "name": "My soundbite1", "datetime": 1448762533, "filename": "somefile1.mp4", "mediaLength": 341, "url": "http://www.youtube.com","tags": "#prom","photo": "somephoto3.jpg","author": "anAuthorId0001","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name1": "location name1"}}');
    var soundbite2 = JSON.parse('{"id": "aDbGeneratedId0002", "type": "default", "name": "My soundbite2", "datetime": 1393113600, "filename": "somefile2.mp4", "mediaLength": 183, "url": "http://www.youtube.com","tags": "#india","photo": "somephoto2.jpg","author": "anAuthorId0002","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name2": "location name2"}}');
    $scope.date = 12448762533;

    if (useMockData){
    	$scope.soundbites = [soundbite0, soundbite1, soundbite2];
    } else {
    	// Fetch from DB
    	$scope.getSoundbites();
    };

  // For infinite list
  var currentStart = 0
  $scope.items = []
	$scope.addMoreSoundbites = function() {
	for (var i = currentStart; i < currentStart+20; i++) {
		$scope.items.push(soundbite2)
	}

	currentStart += 20
	}

	$scope.addMoreSoundbites()


};