var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
  $scope.firstName = "Carlos B.";
  $scope.lastName = "Lora G.";
  $scope.filteringInput = "";
  $scope.names = ["Carlos", "Gabriel", "Gabriela", "Jose", "Andres", "Geury", "Mayelin"];
  $scope.myCol = "lightblue";
  $scope.colors = ["blue", "lightblue", "green", "red", "pink"];
  $scope.methods = {
      alertFullName: function () {
          alert($scope.firstName + " " + $scope.lastName);
      },
      addName: function () {
          $scope.names.push($scope.firstName);
      }
  };
});