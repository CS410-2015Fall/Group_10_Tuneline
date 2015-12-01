angular.module('profileCntl', [])

.controller('ProfileCntl', function($scope, $cordovaFacebook, $http, DatabaseService, UploadService) {
  	var fbPermissions = ['email','public_profile','user_friends'];
  	var url = "http://159.203.246.24/fbLogin.php";
  	var push = null;

	$scope.result = null;
	$scope.fullName = null;
	$scope.fbId = null;
	$scope.sync = null;

  	var userCB = function(result) {
  		if (result.length > 0) {
  			$scope.fullName = result[0]['name'];
	  		$scope.fbId = result[0]['id'];
	  		$scope.sync = (result[0]['doSync'] == 1) ? true : false;
	  		$scope.$apply();
	  	}
  	}
  	DatabaseService.getUser(userCB);
  	$scope.user = Ionic.User.current();

	// register push notifications if user.id is set
	if ($scope.user.id != null) {
		push = new Ionic.Push();
    	var callback = function(pushToken) {
    		console.log('Registered token: ' + JSON.stringify(pushToken.token));
    		$scope.user.addPushToken(pushToken);
    		$scope.user.save();
    	}
    	push.register(callback);
	}

	$scope.login = function() {
		// only login if user.id not set due to being not logged into FB
		$cordovaFacebook.login(fbPermissions)
		.then(function(success) {
			// set Ionic user.id to fbId (load from Ionic platform if possible)
			$scope.fbId = success.authResponse.userID;
			$scope.accessToken = success.authResponse.accessToken;		
			// $scope.result = success;

			// register push notifications for the current user
			$scope.user.id = $scope.fbId;

			push = new Ionic.Push();
    		$scope.user.save();

        	var callback = function(pushToken) {
        		console.log('Registered token: ' + JSON.stringify(pushToken.token));
        		$scope.user.addPushToken(pushToken);
        	}

        	push.register(callback);
            $scope.getMe();
		},
		function(error) {
			// error logging in
			console.log('Error logging in: ' + JSON.stringify(error));
		});
	};

	$scope.getFriends = function() {
		var path = "me/friends?limit=5000";
		$cordovaFacebook.api(path, ['user_friends'])
		.then(function(success) {
			var friends = success.data;
			// save friends list to local db
			//	format: [{"id":"10153748096834287","name":"Ben Nguyen"}, {...}, ...]
			DatabaseService.saveFriends(friends);

			// post friend data to server
			var url = "http://159.203.246.24/friends.php";
			var data = {"friends": friends, "srcId": $scope.fbId, "srcName": $scope.fullName};
			$http.post(url, data)
			.then(function (result){
				// should return friend data from server for which theyre syncing with
            	//	format: [{"id":"10153748096834287","name":"Ben Nguyen"}, {...}, ...]
            	var syncList = result.data;
            	DatabaseService.saveSyncable(syncList);

            });
		}, function(error) {
			alert(JSON.stringify(error));
			// error getting friends list
		});
	};

	$scope.getSyncList = function() {
		// post friend data to server
		var url = "http://159.203.246.24/syncList.php";
		var data = {"id": $scope.fbId};
		$http.post(url, data)
		.then(function (result){
			// should return friend data from server for which theyre syncing with
        	//	format: [{"id":"10153748096834287","name":"Ben Nguyen"}, {...}, ...]
        	var syncList = result.data;
        	// todo: populate friend db
        	DatabaseService.saveSyncable(syncList);
        });
	};

	$scope.getMe = function() {
		var path = $scope.fbId + "?fields=first_name,last_name";
		$cordovaFacebook.api(path, ['public_profile'])
		.then(function(success) {
        	$scope.user.set('firstName', success.first_name);
        	$scope.user.set('lastName', success.last_name);
        	$scope.fullName = success.first_name + ' ' + success.last_name;
        	$scope.user.set('fullName', $scope.fullName);
        	DatabaseService.saveUser($scope.fbId, $scope.fullName);

        	$scope.user.save();
        	$scope.getFriends();
		}, function(error) {
			console.log("ERROR while getting self FB info: " + JSON.stringify(error));
		});
	};

	$scope.logout = function() {
		$cordovaFacebook.logout()
		.then(function(success){
			// successfully logged out
		}, function(error) {
			// error logging out
		});
	};

	$scope.updateSync = function(bool) {
		DatabaseService.updateSync(bool,$scope.fbId);
		if (bool) {
			// if sync is true, upload our metadata
			console.log("Uploading metadata");
			UploadService.uploadMetadata($scope.fbId);
		}
	};

	$scope.forceSync = function() {
		UploadService.uploadMetadata($scope.fbId);
	};

    $scope.test = function() {
        
    }
});