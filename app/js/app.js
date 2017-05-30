var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularCtrl', function ($scope) {
  $scope.title = "Testing Angular Js Application";

  $scope.destinations = [];

  $scope.newDestination = {
    city: undefined,
    country: undefined
  };

  $scope.addDestination = function () {
    $scope.destinations.push({
      city: $scope.newDestination.city,
      country: $scope.newDestination.country
    });
  }
});
