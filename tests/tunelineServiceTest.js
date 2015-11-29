describe('TunelineService', function() {

	//These will be used to hold the mock services that we will inject into the cntl
	var service, databaseService;

    //Before each test, load our module
    beforeEach(function(){
	  module(function($provide){
	    $provide.service('DatabaseService', function(){
	      this.getSounds = function(){};
	    });
	  });
	  module('tunelineService');
	});

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function(TunelineService, DatabaseService) {
		service = TunelineService;
		databaseService = DatabaseService;
	}));	

	//These are our actual unit tests
	it('service.getSoundbites', function(){
		service.getSoundbites();
		expect(true).toBe(true);

	});	
});