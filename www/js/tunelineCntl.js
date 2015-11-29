angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', 'DatabaseService', TunelineCntl]);

function TunelineCntl($scope, DatabaseService) {
	console.log("******************** in  TunelineCntl");

    $scope.soundbites = [];

	var soundbitesCallback = function(result){
		console.log("result = " + JSON.stringify(result));
		$scope.soundbites = result;
	};

    getSoundbites = function () {
        DatabaseService.getSounds(soundbitesCallback)
            .then(function (sbites) {                        
                $scope.soundbites = sbites;
                console.log('sbites returned to TunelineCntl.', sbites);
            },
            function () {
                console.log('sbites retrieval failed.');
            });
    };
    
    getSoundbites();
};