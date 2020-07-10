'use strict';

var app = angular.module('myApp', []).controller('myCtrl', function ($scope, $location, $http) {
    $scope.myUrl = $location.absUrl();
    $http.get("MyWelcome.txt").then(function (response) {
        $scope.myWelcome = response.data;
    });
    $http.get("Persons.json").then(function (response) {
        $scope.persons = response.data;
    });
    $scope.filterVal = "";
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
});