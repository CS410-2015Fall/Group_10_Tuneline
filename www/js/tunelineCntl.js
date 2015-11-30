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

	// Fetch from DB
	$scope.getSoundbites();


  // For infinite list
    var currentStart = 0
    $scope.items = []
    $scope.addMoreSoundbites = function() {
        for (var i = currentStart; i < currentStart+20; i++) {
        	$scope.items.push({});
        }
        currentStart += 20
    };

    $scope.addMoreSoundbites();

    $scope.doRefresh = function() {
        console.log("(************** refreshed...");
        $scope.getSoundbites();    
        $scope.$broadcast('scroll.refreshComplete'); // Stop the ion-refresher from spinning
        $scope.$apply();
  };
};