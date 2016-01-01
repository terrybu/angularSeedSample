'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.items = [
    { id: 1, name: 'PraiseSongList'},
    { id: 2, name: 'General'}];
  $scope.selectedItem = null;

}]);