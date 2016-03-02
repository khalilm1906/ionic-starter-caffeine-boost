var app = angular.module('caffeineboost.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;
});
