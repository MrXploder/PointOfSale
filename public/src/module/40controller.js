(function(){
	/*
	 -> mainController will watch for userLogin Session and toggle view
	*/
	'use strict';

	angular
	.module('angularApp')
	.controller('mainController', mainController);

	mainController.$inject = ["$scope", "$localStorage", "$sessionStorage"];

	function mainController($scope, $localStorage, $sessionStorage){
		let $mc = this;
		$scope.$storage = $sessionStorage;

		activate();
		///////////////////////////////////////////////////

		function activate(){
			
		}
	}
})();