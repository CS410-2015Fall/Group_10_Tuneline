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
    $scope.doSomething = function () {
        console.log("Hello, " + $scope.filterKey.name);
        console.log("*****************scope.soundbites = " + JSON.stringify($scope.soundbites));

    var matchFound = false;
    var newSoundbitesList = [];
    for (var i = 0, len = $scope.soundbites.length; i < len; i++)
    {
        matchFound = $scope.soundbites[i].name == $scope.filterKey.name;
        if(matchFound){

            console.log("*****************MATCH!");
            newSoundbitesList.push($scope.soundbites[i]);
            break;
        }
    }

    $scope.soundbites = newSoundbitesList;  

    }




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
    var currentStart = 0
    $scope.items = []
    $scope.addMoreSoundbites = function() {
        for (var i = currentStart; i < currentStart+20; i++) {
            $scope.items.push({});
        }
        currentStart += 20
    };

    $scope.addMoreSoundbites();

    $scope.doRefresh = function() {
        console.log("(************** refreshed...");
        $scope.getSoundbites();    
        $scope.$broadcast('scroll.refreshComplete'); // Stop the ion-refresher from spinning
        $scope.$apply();
  };
};
