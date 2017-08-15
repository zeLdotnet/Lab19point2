angular.module("phraseApp", [])
.controller("phraseController", function($scope, $http){
	$http.get("/api/random-phrase").then(function(response){
		console.log(response.data);
		$scope.phrases = response.data;
	})
});