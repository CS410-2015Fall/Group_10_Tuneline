
describe('SoundbiteCntl', function() {
	
	// The variable where we will create our controller that we will be testing
	var controller;

	//These will be used to hold the mock services that we will inject into the cntl
	var scope, stateParams, interval,
        cordovaDevice, cordovaFile, cordovaMedia, 
        cordovaGeolocation, cordovaInAppBrowser,
        SaveService,DatabaseService, UploadService, ionicPopover;

    //Before each test, load our module
    beforeEach(module('soundbiteCntl'));

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function($rootScope, $controller, $q) {
		//Create the mock services
		scope = $rootScope.$new();
		stateParams = {soundbiteId: 'TEST_ID'};
		cordovaDevice = {};
		cordovaFile = {};
		cordovaMedia = {};
        cordovaGeolocation = {};
        cordovaInAppBrowser = {};
        SaveService = {};
        UploadService = {};
        ionicPopover = {fromTemplateUrl : function(string, obj){
        	var deferred = $q.defer();
        	return deferred.promise;
        }};

        DatabaseService = {
        	getSoundsById: function(){},
        	saveSoundToPlaylist: function(){},
        	savePlaylist: function(name){return name;},
        	getPlaylists: function(cb){
        		cb('1');
        	},
        	removePlaylist: function(){}
    	};

        //Create our controller and inject the services
		controller = $controller('SoundbiteCntl', {
										$scope: scope,
										$stateParams: stateParams,
										$cordovaDevice: cordovaDevice,
										$cordovaFile: cordovaFile,
										$cordovaMedia: cordovaMedia,
										$cordovaGeolocation: cordovaGeolocation,
										$cordovaInAppBrowser: cordovaInAppBrowser,
										$ionicPopover: ionicPopover,
										SaveService: SaveService,
										DatabaseService: DatabaseService,
										UploadService: UploadService
									});
	}));

	//These are our actual unit tests
	it('$scope.startTimer', function(){
		expect(scope.timer).toBe(0);
		scope.startTimer();
	});

	it('$scope.soundbiteId', function(){
		expect(scope.soundbiteId).toBe('TEST_ID');
	});

	it('$scope.record', function(){		
		expect(scope.buttonState).toBe('record');
		expect(scope.fileName).toBe(undefined);
		scope.record();
		expect(scope.buttonState).toBe('stop');
		expect(scope.fileName).not.toBe(undefined);
		expect(scope.mediaObject).not.toBe(undefined);
	});

	it('$scope.platform', function(){
		//TODO:  need to figure out how to trigger the "deviceready" event
		expect(scope.platform).toBe(undefined);
	});

	it('$scope.stopRecording', function(){
		expect(scope.fileName).toBe(undefined);
		scope.record();
		scope.stopRecording();
		expect(scope.buttonState).toBe('record');
		expect(scope.timer).toBe(0);
	});

	it('$scope.initPlayer', function(){
		scope.initPlayer('testfile.wav');
		expect(scope.mediaObject.src).toBe('testfile.wav');
	});

	it('$scope.playMedia', function(){
		scope.initPlayer('testfile.wav');
		expect(scope.mediaObject.src).toBe('testfile.wav');
		scope.playMedia(0);
		expect(scope.mediaStatus).toBe(2);
	});

	it('$scope.pauseMedia', function(){
		scope.initPlayer('testfile.wav');
		expect(scope.mediaObject.src).toBe('testfile.wav');
		scope.pauseMedia();
		expect(scope.mediaStatus).toBe(3);
	});

	it('$scope.stopMedia', function(){
		scope.initPlayer('testfile.wav');
		expect(scope.mediaObject.src).toBe('testfile.wav');
		scope.stopMedia();
		expect(scope.mediaStatus).toBe(4);
	});

	it('$scope.resetMedia', function(){
		scope.initPlayer('testfile.wav');
		expect(scope.mediaObject.src).toBe('testfile.wav');		
		scope.playMedia(0);
		expect(scope.mediaStatus).toBe(2);
		scope.resetMedia();
		expect(scope.mediaStatus).toBe(4);
		expect(scope.mediaObject).toBe(null);
	});

	it('$scope.toggleDeletePlaylist', function(){
		expect(scope.showDeletePlaylist).toBe(false);		
		scope.toggleDeletePlaylist();
		expect(scope.showDeletePlaylist).toBe(true);
		scope.toggleDeletePlaylist();
		expect(scope.showDeletePlaylist).toBe(false);
	});

	it('$scope.openAddToPlaylist', function(){
		scope.popoverAdd = {
        		show: function(event){},
        		hide: function(){}
        	};		
		scope.openAddToPlaylist();
	});

	it('$scope.closeAddToPlaylist', function(){
		scope.popoverAdd = {
        		show: function(event){},
        		hide: function(){}
        	};
		scope.showDeletePlaylist = true;
		scope.closeAddToPlaylist();
		expect(scope.showDeletePlaylist).toBe(false);
	});

	it('$scope.saveToPlaylist', function(){
		scope.popoverAdd = {
        		show: function(event){},
        		hide: function(){}
        	};
        scope.playlistId = {selected: 5};
		scope.showDeletePlaylist = true;
		scope.saveToPlaylist();
		expect(scope.showDeletePlaylist).toBe(false);
		expect(scope.playlistId.selected).toBe('');
	});

	it('$scope.openCreatePlaylist', function(){
		scope.popoverCreate = {
        		show: function(event){},
        		hide: function(){}
        	};
		scope.openCreatePlaylist();
	});

	it('$scope.createPlaylist', function(){
		scope.popoverCreate = {
        		show: function(event){},
        		hide: function(){}
        	};
        scope.popoverAdd = {
        		show: function(event){},
        		hide: function(){}
        	};
        scope.newPlaylist.name = 'test name'
		scope.createPlaylist();
		expect(scope.playlists).toBe('1');
		expect(scope.newPlaylist.name).toBe('');
	});

	it('$scope.deletePlaylist', function(){		
		scope.deletePlaylist();
	});

});