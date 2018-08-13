(function(){
	/*
	 -> mainController will watch for userLogin Session and toggle view
	*/
	'use strict';

	angular
	.module('angularApp')
	.controller('mainController', mainController);

	mainController.$inject = ["$scope", "$localStorage", "$window", "$rootScope"];

	function mainController($scope, $localStorage, $window, $rootScope){
		var mc = this;
		$scope.$storage = $localStorage;

		mc.form = { name: null, pass: null };
		mc.logIn = logIn;
		mc.onLine = $window.navigator.onLine;
		mc.isRouteLoading = false;

		function logIn(){
			$scope.$broadcast('attemptToLogIn', mc.form); //"main" (parent) -> "login" (child) controller
			mc.form = {};
		}

		$rootScope.$on('$routeChangeStart', function(){
			mc.isRouteLoading = true;
		});

		$rootScope.$on('$routeChangeSuccess', function(){
			mc.isRouteLoading = false;
		});

		$window.addEventListener('offline', function(){
			mc.onLine = false;
		});

		$window.addEventListener('online', function(){
			mc.onLine = true;
		});
	}
})();