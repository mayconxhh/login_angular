var myApp = angular.module('resource', ['ngRoute'])

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1730693780481494',
      xfbml      : true,
      version    : 'v2.6'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'controller1',
			templateUrl: './templates/home.html'
		})
		.when('/about/:id', {
			controller: 'controller2',
			templateUrl: './templates/about.html'
		})
		.otherwise('/')
}])
myApp.controller('controller1', ['$scope', '$location', function($scope, $location){
	$scope.name = 'XD'


	$scope.ids = [
		{id: 'asdfghjk'}
	]

	console.log($scope.ids)

	$scope.addId = function(){
		var data = {
			id: $scope.txt
		}
		console.log(data)
		$scope.ids.push(data)
		console.log($scope.ids)
		$scope.txt = ''
	}

	$scope.url = function(url){
		//myService.data.url = url

		$location.url('/about/'+url)
	}

	$scope.login = function(){
		FB.login(function(response) {
		    if (response.authResponse) {
		    	console.log('Welcome!  Fetching your information.... ');
		    	FB.api('/me', function(response) {
					console.log('Good to see you, ' + response.name + '.');
					console.log(response)
					var authToken = FB.getAuthResponse()
					console.log(authToken.accessToken)
		    	});
		    } else {
				console.log('User cancelled login or did not fully authorize.');
		    }
		    FB.api('/me/feed', 'post', {message: $scope.txt2});
		}, {scope: 'publish_actions'});
	}

}])

myApp.controller('controller2', ['$scope', function($scope){
	//myService.data.url = 'controlador 2'
	console.log('XD')
	$scope.name = 'asdasdasd'
}])
