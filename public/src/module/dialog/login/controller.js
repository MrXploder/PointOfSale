(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('loginController', loginController);

	loginController.$inject = ["$scope"];

	function loginController($scope){
		let $ctrl = this;

		$ctrl.form 	= {};
		$ctrl.login = login;

		activate();
		///////////////////////////////

		function activate(){

		}

		function login(){
			$scope.confirm();
		}
	}
})();