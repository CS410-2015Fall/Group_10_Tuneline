describe('ProfileService', function() {

	//These will be used to hold the mock services that we will inject into the cntl
	var service;

    //Before each test, load our module
    beforeEach(function(){
	  module('profileService');
	});

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function(ProfileService) {
		service = ProfileService;
	}));	

	//These are our actual unit tests
	it('service.getPlaylists', function(){
		expect(true).toBe(true);
	});	
});