
describe('TunelineCntl', function() {
	
	// The variable where we will create our controller that we will be testing
	var controller;

	//These will be used to hold the mock services that we will inject into the cntl
	var scope, DatabaseService, TunelineService;

    //Before each test, load our module
    beforeEach(module('tunelineCntl'));

    ///Create/Inject our mocks into the controller
	beforeEach(inject(function($rootScope, $controller) {
		//Create the mock services
		scope = $rootScope.$new();
		DatabaseService = {getSounds:function(){
			//need to return mock data
			var soundbite0 = JSON.parse('{"id": 0, "type": "default", "name": "My soundbite0", "datetime": 1448881652508, "filename": "somefile.mp4", "url": "http://www.youtube.com","tags": "#yoloswag","photo": "somephoto.jpg","author": "anAuthorId0000","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name": "location name"}}');
			var soundbite1 = JSON.parse('{"id": 1, "type": "default", "name": "My soundbite1", "datetime": 1748881652508, "filename": "somefile1.mp4", "url": "http://www.youtube.com","tags": "#prom","photo": "somephoto3.jpg","author": "anAuthorId0001","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name1": "location name1"}}');
			var soundbite2 = JSON.parse('{"id": 2, "type": "default", "name": "My soundbite2", "datetime": 1468881652508, "filename": "somefile2.mp4", "url": "http://www.youtube.com","tags": "#india","photo": "somephoto2.jpg","author": "anAuthorId0002","location": {"lat": "49.2602007","lng": "-123.2501255","accuracy": 5,"altitude": "0","name2": "location name2"}}');
			scope.soundbites = [soundbite0, soundbite1, soundbite2];  
		}};
		TunelineService = {};

        //Create our controller and inject the services
		controller = $controller('TunelineCntl', {
										$scope: scope,
										DatabaseService: DatabaseService,
										TunelineService: TunelineService
										});
	}));

	//These are our actual unit tests
	it('$scope.tuneline', function(){
		//scope.login();
		expect(true).toBe(true);

	});

	it('$scope.filterSoundbites', function(){
		DatabaseService.getSounds();
		console.log("************* unit test with soundbites = " + JSON.stringify(scope.soundbites));
		expect(scope.soundbites[0].name).toBe("My soundbite0");
	});

});