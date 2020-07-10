var app = angular.module('myApp', []);
app.controller('FiltersCtrl', function ($scope, $http) {
    $http.get("friends.json").then(function(response) {
        $scope.friends = response.data;
    });
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
});