(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('posController', posController);

	posController.$inject = ["$scope", "$localStorage", "Invoice", "Products"];

	function posController($scope, $localStorage, Invoice, Products){
		let $ctrl = this;

		$ctrl.invoice 		 			= new Invoice.resource({operator_id: $localStorage.currentUser._id, product_list: []});
		$ctrl.products     			= [];
		$ctrl.barCodeModel 			= "";
		$ctrl.addToInvoice 			= addToInvoice;
		$ctrl.isPaying					= isPaying;

		activate();
		//////////////////////////////////

		function activate(){
			Products.find({}).then(function(products){
				$ctrl.products = products;
			});
		}

		function addToInvoice(){
			let element = $ctrl.products.find(item => item.code === $ctrl.barCodeModel);
			if(typeof element !== "undefined") $ctrl.invoice.add(element);
			$ctrl.barCodeModel = "";
		}

		function isPaying(){
			return true;
		}
	}
})();