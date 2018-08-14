(function(){
	/*
	 -> mainController will watch for userLogin Session and toggle view
	*/
	'use strict';

	angular
	.module('angularApp')
	.controller('mainController', mainController);

	mainController.$inject = ["$scope", "$localStorage", "$window", "$rootScope", "ENV"];

	function mainController($scope, $localStorage, $window, $rootScope, ENV){
		var mc = this;
		$scope.$storage = $localStorage;

	}
})();