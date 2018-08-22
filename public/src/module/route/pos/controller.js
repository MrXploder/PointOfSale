(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('posController', posController);

	posController.$inject = ["$scope", "$sessionStorage", "Invoices", "Products", "ngDialog", "$window", "$timeout", "Promotions"];

	function posController($scope, $sessionStorage, Invoices, Products, ngDialog, $window, $timeout, Promotions){
		let $ctrl = this;

		$ctrl.invoice 		 = {};
		$ctrl.products     = [];
		$ctrl.barCodeModel = "";
		$ctrl.productNameModel = "";
		$ctrl.addToInvoice = {byCode, byName};
		$ctrl.focus 			 = false;
		$ctrl.isPaying		 = false;
		$ctrl.payInvoice   = payInvoice;
		$ctrl.resetInvoice = resetInvoice;
		$ctrl.mustFocus    = mustFocus;

		activate();
		//////////////////////////////////

		function activate(){
			$window.addEventListener("keypress", function(event){
				$timeout(function(){
					/*numbers*/
					if(event.keyCode >= 48 && event.keyCode <= 57){
						$ctrl.focus = false;
						if($ctrl.productNameModel !== ""){
							$ctrl.barCodeModel = $ctrl.productNameModel.slice(-1);
							$ctrl.productNameModel = "";
						}
						else $ctrl.productNameModel = "";
						$scope.$apply();
					}
					/*letters*/
					else if(event.keyCode >= 97 && event.keyCode <= 122){
						$ctrl.focus = true;
						if($ctrl.barCodeModel !== ""){
							$ctrl.productNameModel = $ctrl.barCodeModel.slice(-1);
							$ctrl.barCodeModel = "";
						}
						else $ctrl.barCodeModel = "";
						$scope.$apply();
					}
				});
			});

			Products.find({}).then(function(products){
				$ctrl.products = products;
			});

			Promotions.find({}).then(function(promotions){
				console.log(promotions);
				$ctrl.invoice = new Invoices({promotions});
			})
		}

		function mustFocus(){
			if($ctrl.focus) return true;
			else return false;
		}

		function byCode(){
			let product = $ctrl.products.find(item => item.code === $ctrl.barCodeModel);
			if(typeof product !== "undefined") $ctrl.invoice.$add(product);
			$ctrl.barCodeModel = "";
		}

		function byName(){
			let product = $ctrl.products.find(item => item.name === $ctrl.productNameModel);
			if(typeof product !== "undefined") $ctrl.invoice.$add(product);
			$ctrl.productNameModel = "";
		}

		function resetInvoice(){
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