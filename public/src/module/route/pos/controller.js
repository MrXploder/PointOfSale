(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('posController', posController);

	posController.$inject = ["$scope", "$sessionStorage", "Invoices", "Products", "ngDialog"];

	function posController($scope, $sessionStorage, Invoices, Products, ngDialog){
		let $ctrl = this;

		$ctrl.invoice 		 = new Invoices();
		$ctrl.products     = [];
		$ctrl.barCodeModel = "";
		$ctrl.addToInvoice = addToInvoice;
		$ctrl.isPaying		 = false;
		$ctrl.payInvoice   = payInvoice;
		$ctrl.resetInvoice = resetInvoice;

		activate();
		//////////////////////////////////

		function activate(){
			Products.find({}).then(function(products){
				$ctrl.products = products;
			});
		}

		function addToInvoice(){
			let element = $ctrl.products.find(item => item.code === $ctrl.barCodeModel);
			if(typeof element !== "undefined") $ctrl.invoice.$add(element);
			$ctrl.barCodeModel = "";
		}

		function resetInvoice(){
			$ctrl.invoice = new Invoices();
			$ctrl.barCodeModel = "";
		}

		function payInvoice(){
			$ctrl.isPaying = true;
			ngDialog.openConfirm({
				showClose: false,
				controller: "payDialogController",
				controllerAs: "$vm",
				templateUrl: "src/module/dialog/pay/template.html",
				data: $ctrl.invoice,
				showClose: true,
				closeByEscape: true,
			})
			.then(() => resetInvoice())
			.catch(() => {}) /*not catching errors is deprecated in node*/
			.finally(() => $ctrl.isPaying = false);
		}
	}
})();