angular.module('tunelineCntl', [])

.controller('TunelineCntl', function TunelineCntl($scope, soundbites) {
		$scope.soundbites = soundbites;
	}
);