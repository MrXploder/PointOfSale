(function(){
	angular
	.module('angularApp')
	.controller('homeController', homeController);

	homeController.$inject = ["$localStorage", "$timeout", "$location"];

	function homeController($localStorage, $timeout, $location){
		var hmc = this;
	}
})();