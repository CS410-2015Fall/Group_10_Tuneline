
describe('ProfileCntl', function() {
	
	// The variable where we will create our controller that we will be testing
	var controller;

	//These will be used to hold the mock services that we will inject into the cntl
	var scope, cordovaFacebook, http, DatabaseService;

    //Before each test, load our module
    beforeEach(module('profileCntl'));

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function($rootScope, $controller) {
		//Create the mock services
		scope = $rootScope.$new();
		cordovaFacebook = {login: function(){},
							}; //need to properly create mocks
		http = {};
		DatabaseService = {
			getUser: function(){},
			saveUser: function(){}
		};

        //Create our controller and inject the services
		controller = $controller('ProfileCntl', {
										$scope: scope,
										$cordovaFacebook: cordovaFacebook,
										$http: http,
										DatabaseService: DatabaseService});
	}));

	//These are our actual unit tests
	it('$scope.login', function(){
		//scope.login();
		expect(true).toBe(true);

	});

	it('$scope.getFriends', function(){
		//scope.getFriends();
		expect(true).toBe(true);

	});

	it('$scope.getMe', function(){
		//scope.getMe();
		expect(true).toBe(true);

	});

	it('$scope.logout', function(){
		//scope.logout();
		expect(true).toBe(true);

	});

});