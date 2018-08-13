(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('dashboardController', dashboardController);

	dashboardController.$inject = ["$scope"];

	function dashboardController($scope){
		let $ctrl = this;

		activate();
		//////////////////////////////////

		function activate(){

		}
	}
})();