(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('productsController', productsController);

	productsController.$inject = ["$scope", "ProductsLocal", "ProductsLocal", "$localStorage"];

	function productsController($scope, ProductsLocal, Products, $localStorage){
		let $ctrl = this;

		$ctrl.products 		= [];
		$ctrl.currentUser = $localStorage.currentUser;

		activate();
		////////////////////////////////////////////////////////////////

		function activate(){
			ProductsLocal.find({}).then(function(products){
				$ctrl.products = products;
			});
		}
	}
})();