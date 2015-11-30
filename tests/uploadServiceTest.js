describe('UploadService', function() {

	//These will be used to hold the mock services that we will inject into the cntl
	var service, cordovaFileTransfer, databaseService;

    //Before each test, load our module
    beforeEach(function(){
	  module(function($provide){
	    $provide.service('$cordovaFileTransfer', function(){
	      this.upload = function(){};
	    });
	    $provide.service('DatabaseService', function(){

	    });
	  });
	  module('uploadService');
	});

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function(UploadService, $cordovaFileTransfer, DatabaseService) {
		service = UploadService;
		cordovaFileTransfer = $cordovaFileTransfer;
		databaseService = DatabaseService;
	}));	

	//These are our actual unit tests
	it('service.upload', function(){
		//service.upload('testpath/file.wav');
		expect(true).toBe(true);

	});	
});