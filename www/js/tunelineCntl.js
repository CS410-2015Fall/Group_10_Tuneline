angular.module('tunelineCntl', [])

.controller('TunelineCntl', ['$scope', 'DatabaseService', TunelineCntl]);

function TunelineCntl($scope, DatabaseService) {
    console.log("******************** in  TunelineCntl");

    $scope.showAlert = function() {
    alert("show");
};

// $scope.showFilterBar = function () {
//       filterBarInstance = $ionicFilterBar.show({
//         items: items,
//         update: function (filteredItems) {
//           items = filteredItems;
//         },
//         filterProperties: 'description'
//       });
//     };
    $scope.selectItem = "nulls";

    $scope.filterKey = {
        name:  null,
        date: null,
        tags: null,
        location: null
    }
    // $scope.foo = null;
    $scope.filterSoundbites = function () {
        console.log("Hello, " + $scope.filterKey.name.toLowerCase());
        console.log("*****************scope.soundbites = " + JSON.stringify($scope.soundbites));

        var matchFound = false;
        var newSoundbitesList = [];

        for (var i = 0, len = $scope.soundbites.length; i < len; i++) 
        {
            matchFound = $scope.soundbites[i].name.toLowerCase() == $scope.filterKey.name.toLowerCase();
            if(matchFound)
                {
                console.log("*****************MATCH!");
                newSoundbitesList.push($scope.soundbites[i]);
                break;
                }
            }
        $scope.soundbites = newSoundbitesList;
    }

// $scope.friends = [{name:'John', phone:'555-1276'},
//                          {name:'Mary', phone:'800-BIG-MARY'},
//                          {name:'Mike', phone:'555-4321'},
//                          {name:'Adam', phone:'555-5678'},
//                          {name:'Julie', phone:'555-8765'},
//                          {name:'Juliette', phone:'555-5678'}];

//     var expectFriendNames = function(expectedNames, key) {
//       element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
//         arr.forEach(function(wd, i) {
//           expect(wd.getText()).toMatch(expectedNames[i]);
//         });
//       });
//     };

//     it('should search across all fields when filtering with a string', function() {
//       var searchText = element(by.model('searchText'));
//       searchText.clear();
//       searchText.sendKeys('m');
//       expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');

//       searchText.clear();
//       searchText.sendKeys('76');
//       expectFriendNames(['John', 'Julie'], 'friend');
//     });

//     it('should search in specific fields when filtering with a predicate object', function() {
//       var searchAny = element(by.model('search.$'));
//       searchAny.clear();
//       searchAny.sendKeys('i');
//       expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
//     });
//     it('should use a equal comparison when comparator is true', function() {
//       var searchName = element(by.model('search.name'));
//       var strict = element(by.model('strict'));
//       searchName.clear();
//       searchName.sendKeys('Julie');
//       strict.click();
//       expectFriendNames(['Julie'], 'friendObj');
//     });






    $scope.soundbites = [];

    var soundbitesCallback = function(result){
        // console.log("*****************result = " + JSON.stringify(result));
        $scope.soundbites = result;
        // force redraw of the view
        $scope.$apply();
    };

    $scope.getSoundbites = function () {
        DatabaseService.getSounds(soundbitesCallback);
        // console.log("*****************scope.soundbites = " + JSON.stringify($scope.soundbites));
    };

    // Fetch from DB
    $scope.getSoundbites();


  // For infinite list
    // var currentStart = 0
    // $scope.items = []
    // $scope.addMoreSoundbites = function() {
    //     for (var i = currentStart; i < currentStart+20; i++) {
    //         $scope.items.push({});
    //     }
    //     currentStart += 20
    // };

    // $scope.addMoreSoundbites();

    $scope.doRefresh = function() {
        console.log("(************** refreshed...");
        $scope.getSoundbites();    
        $scope.$broadcast('scroll.refreshComplete'); // Stop the ion-refresher from spinning
        $scope.$apply();
  };
};
