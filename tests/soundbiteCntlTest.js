describe('SoundbiteCntl', function() {
  beforeEach(module('starter'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.timer', function() {
    it('check the initial timer is 0', function() {
      var $scope = {};
      var controller = $controller('SoundbiteCtrl', { $scope: $scope });
      expect($scope.timer).toEqual(0);
    });
  });
});