angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', 'TunelineService', TunelineCntl]);

function TunelineCntl($scope, TunelineService) {
	$scope.soundbites = TunelineService.getSoundbites();

	// Recommended by Ben...
	// $scope.soundbites = null;
	// TunelineService.getSoundbites().then(function(result){$scope.soundbites = result});
};
