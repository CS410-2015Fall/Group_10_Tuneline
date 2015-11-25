angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', 'TunelineService', TunelineCntl]);

function TunelineCntl($scope, TunelineService) {

	$scope.soundbites = TunelineService.getSoundbites();

};
