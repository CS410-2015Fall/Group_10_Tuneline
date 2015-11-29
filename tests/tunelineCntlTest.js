
describe('TunelineCntl', function() {
	
	// The variable where we will create our controller that we will be testing
	var controller;

	//These will be used to hold the mock services that we will inject into the cntl
	var scope, DatabaseService;

    //Before each test, load our module
    beforeEach(module('tunelineCntl'));

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function($rootScope, $controller) {
		//Create the mock services
		scope = $rootScope.$new();
		DatabaseService = {getSounds:function(){
			//need to return mock data
		}};

        //Create our controller and inject the services
		controller = $controller('TunelineCntl', {
										$scope: scope,
										DatabaseService: DatabaseService,
										});
	}));

	//These are our actual unit tests
	it('$scope.tuneline', function(){
		//scope.login();
		expect(true).toBe(true);

	});

});