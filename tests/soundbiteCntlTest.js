//These are mocks for the globals defined by one of the cordova plugins
var navigator = {	'geolocation': {
    						getCurrentPosition : function(){ return null }
    					}
    				};
describe('SoundbiteCntl', function() {
	
	// The variable where we will create our controller that we will be testing
	var controller;

	//These will be used to hold the mock services that we will inject into the cntl
	var scope, stateParams, interval,
        cordovaDevice, cordovaFile, cordovaMedia, 
        cordovaGeolocation, cordovaInAppBrowser, 
        SaveService,DatabaseService;

    //Before each test, load our module
    beforeEach(module('soundbiteCntl'));

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function($rootScope, $controller) {
		//Create the mock services
		scope = $rootScope.$new();
		stateParams = {soundbiteId: 'TEST_ID'};
		cordovaDevice = {};
		cordovaFile = {};
		cordovaMedia = {};
        cordovaGeolocation = {};
        cordovaInAppBrowser = {};
        SaveService = {};
        DatabaseService = {};

        //Create our controller and inject the services
		controller = $controller('SoundbiteCntl', {
										$scope: scope,
										$stateParams: stateParams,
										$cordovaDevice: cordovaDevice,
										$cordovaFile: cordovaFile,
										$cordovaMedia: cordovaMedia,
										$cordovaGeolocation: cordovaGeolocation,
										$cordovaInAppBrowser: cordovaInAppBrowser,
										SaveService: SaveService,
										DatabaseService: DatabaseService});
	}));

	//These are our actual unit tests
	it('$scope.timer', function(){
		expect(scope.timer).toBe(0);
		scope.startTimer();
		expect(scope.soundbiteId).toBe('TEST_ID');
	});

	it('scope.soundbiteId', function(){
		expect(scope.soundbiteId).toBe('TEST_ID');
	});

	it('scope.buttonState', function(){
		expect(scope.buttonState).toBe('record');
	});

	it('scope.buttonState', function(){
		expect(scope.buttonState).toBe('record');
	});
});