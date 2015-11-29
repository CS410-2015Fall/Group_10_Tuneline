angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', 'DatabaseService', TunelineCntl]);

function TunelineCntl($scope, DatabaseService) {
	console.log("******************** in  TunelineCntl");

    $scope.soundbites = [];

	var soundbitesCallback = function(result){
		console.log("*****************result = " + JSON.stringify(result));
		$scope.soundbites = result;
	};

    $scope.getSoundbites = function () {
        DatabaseService.getSounds(soundbitesCallback);
    };
    
    $scope.getSoundbites();
};