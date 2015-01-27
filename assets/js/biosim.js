// JavaScript Document

var dnbPortal = angular.module('dnbPortal', [
	'ngRoute',
	'biosimController'
]);

dnbPortal.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'views/home.html',
		controller:'homeCtrl'
	})
	.when('/aboutus', {
		templateUrl:'views/aboutus.html',
		controller:'aboutusCtrl'
	})
	.when('/biosim', {
		templateUrl:'views/biosim.html',
		controller:'biosimCtrl'
	})
	.when('/contactus', {
		templateUrl:'views/contactus.html',
		controller:'contactusCtrl'
	})
	.when('/clients', {
		templateUrl:'views/clients.html',
		controller:'clientsCtrl'
	})
	.when('/login', {
		templateUrl:'views/login.html',
		controller:'loginCtrl'
	})
	.when('/underdev', {
		templateUrl:'views/underdev.html',
		/*controller:'loginCtrl'*/
	})
	.when('/purchase', {
		templateUrl:'views/purchase.html',
		/*controller:'loginCtrl'*/
	})
	.otherwise({
		redirectTo:'/home'
	})
}]);

var biosimController = angular.module ('biosimController', []);

biosimController.controller('maincontroller', ['$rootScope', '$scope', function($rootScope, $scope){
	$('.mob-mainmenu ul').hide();
	$rootScope.running=0;
	$rootScope.currentSlide=1;
	$rootScope.slider=function(){
		var prev='.slider [class*="slide-"]:nth-child('+$rootScope.currentSlide+')';
		$rootScope.currentSlide++;
		if($rootScope.currentSlide>$('.slider [class*="slide-"]').length) $rootScope.currentSlide=1;
		var current='.slider [class*="slide-"]:nth-child('+$rootScope.currentSlide+')';
		
		$(prev).animate({left:-($(prev).width()+100)+'px'}, 1000, 'swing', function(){
			$(prev).css({left:($(prev).width()+100)+'px'}).hide();
		});
		$(current).show().animate({left:0}, 1000, 'swing', function(){
			$rootScope.running=window.setTimeout($rootScope.slider, 10000);
		});
	};
}]);

biosimController.controller('homeCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
	window.scrollTo(0,0);
	$('.mob-mainmenu ul').hide();
	$('.slider, .slider [class*="slide-"]').css({height: ($(window).height())+'px', left:$(window).width()+'px'});
	
	window.clearInterval($rootScope.running);
	$rootScope.running=0;
	$('.slider [class*="slide-"]:nth-child('+$rootScope.currentSlide+')').css({left:0}).show();	
	$rootScope.running=window.setTimeout($rootScope.slider, 10000);
	
}]);

biosimController.controller('aboutusCtrl', function($scope){
	$('.tableofcontent').css({left:($(window).width()-($('.tableofcontent').width()+150))+'px'});
	window.scrollTo(0,0);
});

biosimController.controller('biosimCtrl', function($scope){
	window.scrollTo(0,0);
	$('.mob-mainmenu ul').hide();
});

biosimController.controller('contactusCtrl', function($scope){
	window.scrollTo(0,0);
	$('.mob-mainmenu ul').hide();
});

biosimController.controller('loginCtrl', function($scope){
	window.scrollTo(0,0);
	$('.mob-mainmenu ul').hide();
	window.setTimeout(function(){
		$('#loginplaceholder').html('<iframe frameborder="0" src="http://biosimapp.azurewebsites.net/Login.aspx?ReturnUrl=%2f"></iframe>');
	},500);
});

biosimController.controller('clientsCtrl', function($scope){
	window.scrollTo(0,0);
});
