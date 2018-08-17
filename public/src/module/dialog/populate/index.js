(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('populateController', populateController);

	populateController.$inject = ["$scope", "Auth", "BranchLocal", "Branches"];

	function populateController($scope, Auth, BranchLocal, Branches){
		let $ctrl = this;

		$ctrl.form = new Auth();
		$ctrl.login = login;
		$ctrl.branches = [];

		activate();
		/////////////////////////////////

		function activate(){
			Branches.find({}).then(branches => $ctrl.branches = branches);
		}

		function login(){
			$ctrl.form.$check().then(function(branch){
				BranchLocal.store(branch);
				$scope.confirm();
			})
			.catch(function(response){
				console.log(response);
			})
		}
	}
})();