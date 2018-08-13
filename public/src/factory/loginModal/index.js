(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory("loginModal", loginModal);

	loginModal.$inject = ["ngDialog"];

	function loginModal(ngDialog){
		return function(){
			return ngDialog.openConfirm({
				controller: "loginController",
				controllerAs: "$ctrl",
				templateUrl: "src/module/dialog/login/template.html",
			});
		}
	}
})();