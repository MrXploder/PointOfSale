(function(){
	angular
	.module('angularApp')
	.controller('homeController', homeController);

	homeController.$inject = ["licenseVerificator", "$localStorage", "$timeout", "$location"];

	function homeController(licenseVerificator, $localStorage, $timeout, $location){
		var hmc = this;
	}
})();