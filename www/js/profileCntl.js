angular.module('profileCntl', [])

.controller('ProfileCntl', function($scope, $cordovaFacebook, $http) {
  	var fbPermissions = ['email','public_profile','user_friends'];
  	
  	$scope.result = null;
  	$scope.fbId = null;
  	$scope.accessToken = null;

	$scope.settings = {
		enableFriends: true
	};

	$scope.login = function() {
		$cordovaFacebook.login(fbPermissions)
		.then(function(success) {
			// do stuff
			$scope.fbId = success.authResponse.userID;
			$scope.accessToken = success.authResponse.accessToken;
			
			// send userID to server?
			var url = "http://159.203.246.24/fbLogin.php";
			var data = {fbId: $scope.fbId};
			$http.post(url, data)
			.then(function (result){
            	$scope.result = result.data;
        	});
		},
		function(error) {
			// error logging in
		});
	};

	$scope.getFriends = function() {
		console.log("FRIENDS");
		var path = $scope.fbId + "/friends";
		$cordovaFacebook.api(path, ['user_friends'])
		.then(function(success) {
			$scope.result = success;
			console.log(success);
		}, function(error) {
			// error getting friends list
		});
	};

	$scope.getMe = function() {
		console.log("GET ME");
		var path = $scope.fbId + "?fields=first_name,last_name";
		$cordovaFacebook.api(path, ['public_profile'])
		.then(function(success) {
			$scope.result = success;
		}, function(error) {

		});
	}

	$scope.logout = function() {
		$cordovaFacebook.logout()
		.then(function(success){
			// successfully logged out
		}, function(error) {
			// error logging out
		});
	}
});