(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('loginController', loginController);

	loginController.$inject = ["$scope", "OperatorsLocal", "$localStorage", "$sessionStorage"];

	function loginController($scope, OperatorsLocal, $localStorage, $sessionStorage){
		let $ctrl = this;

		$ctrl.form 	= {};
		$ctrl.login = login;

		activate();
		///////////////////////////////

		function activate(){

		}

		function login(){
			OperatorsLocal.find({rut: $ctrl.form.rut, password: $ctrl.form.password})
			.then(function(user){
				$sessionStorage.currentUser = user[0];
				$scope.confirm();
			})
			.catch(function(){
				$ctrl.form = {};
			});
		}
	}
})();