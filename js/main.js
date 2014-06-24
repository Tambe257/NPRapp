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

app.controller('PlayerController', ['$scope', function($scope) {
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'Lazaretto.mp3';
	$scope.play = function() {
		$scope.audio.play();
		$scope.playing = true;
	};
	$scope.stop = function() {
		$scope.audio.pause();
		$scope.playing = false;
	};
	$scope.audio.addEventListener('ended', function() {
		$scope.$apply(function() {
			$scope.stop()
		});
	});	
}]);

app.controller('RelatedController', ['$scope', function($scope) {


}]);