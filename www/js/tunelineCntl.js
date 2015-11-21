angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', '$state', 'TunelineService', TunelineCntl]);

function TunelineCntl($scope, $state, TunelineService) {
	var vm = this;

	var soundbites = TunelineService.getSoundbites();
	var soundbite = TunelineService.getSoundbiteData();

	$scope.testMessage = "<Binding test using TunelineCntl>";

	vm.soundbites = soundbites;

	vm.selectSoundbite = function(soundbiteId){
		$state.go("tab.soundbite"); //TODO: Change this to our UI specs. Placeholder for now.
	};

	console.log(soundbites, soundbite);
};
