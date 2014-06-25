var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
	$scope.person = { name: "Ari Lerner"};
	var updateClock = function() {
		$scope.clock = new Date();
	};
	var timer = setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
});

var apiKey = 'MDA4NjY5ODI4MDEzMjM0NzcwNDY2ZGFmNA001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', function($scope, $http) {
	//$scope.playing = false;
	//$scope.audio = document.createElement('audio');
	//$scope.audio.src = 'Lazaretto.mp3';
	//$scope.play = function() {
	//	$scope.audio.play();
	//	$scope.playing = true;
	//};
	//$scope.stop = function() {
	//	$scope.audio.pause();
	//	$scope.playing = false;
	//};
	//$scope.audio.addEventListener('ended', function() {
	//	$scope.$apply(function() {
	//		$scope.stop()
	//	});
	//});

	$http({
		method: 'JSONP',
		url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'}).success(function(data, status){
			$scope.programs = data.list.story;
		}).error(function(data, status){

		});	
});

app.controller('RelatedController', ['$scope', function($scope) {


}]);