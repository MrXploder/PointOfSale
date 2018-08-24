(function(){
	'use strict';

	angular
	.module('angularApp')
	.controller('posController', posController);

	posController.$inject = ["$scope", "$sessionStorage", "Invoices", "Products", "ngDialog", "$window", "$timeout", "Promotions"];

	function posController($scope, $sessionStorage, Invoices, Products, ngDialog, $window, $timeout, Promotions){
		let $ctrl = this;
		let iFocus = false;

		$ctrl.invoice 		 = {};
		$ctrl.products     = [];
		$ctrl.barCodeModel = "";
		$ctrl.productNameModel = "";
		$ctrl.addToInvoice = addToInvoice;
		$ctrl.isPaying		 = false;
		$ctrl.payInvoice   = payInvoice;
		$ctrl.resetInvoice = resetInvoice;
		$ctrl.mustFocus    = mustFocus;
		//$ctrl.myViewFunction = myFunction; functions as first class citizen

		$scope.$on('$letterKeypressCustomEvent', letterKeypress);
		$scope.$on('$numberKeypressCustomEvent', numberKeypress);

		activate();
		//////////////////////////////////

		function activate(){
			Products.find({}).then(function(products){
				$ctrl.products = products;
			});

			Promotions.find({}).then(function(promotions){
				$ctrl.invoice = new Invoices({promotions});
			});
		}

		function instantiateInvoice(){
			Promotions.find({}).then(promotions => $ctrl.invoice = new Invoices({promotions}));
		}

		function addToInvoice(by, model){
			if(by === "byName"){
				let product = $ctrl.products.find(item => item.name === model);
				if(typeof product !== "undefined") $ctrl.invoice.$add(product);
			}

			else{
				let product = $ctrl.products.find(item => item.code === model);
				if(typeof product !== "undefined") $ctrl.invoice.$add(product);
			}

			$ctrl.barCodeModel = "";
			$ctrl.productNameModel = "";
		}

		function resetInvoice(){
			activate();
		}

		function payInvoice(){
			$ctrl.isPaying = true;
			ngDialog.openConfirm({
				showClose: false,
				controller: "payDialogController",
				controllerAs: "$vm",
				templateUrl: "src/dialog/pay/template.html",
				data: $ctrl.invoice,
				showClose: true,
				closeByEscape: true,
			})
			.then(() => resetInvoice())
			.catch(() => {}) /*not catching errors is deprecated in node*/
			.finally(() => $ctrl.isPaying = false);
		}

		function mustFocus(){
			if(iFocus) return true;
			else return false;
		}

		function letterKeypress(event){
			if($ctrl.barCodeModel !== ""){
				$ctrl.productNameModel = $ctrl.barCodeModel.slice(-1);
				$ctrl.barCodeModel = "";
			}
			else $ctrl.barCodeModel = "";
			iFocus = true;
			$scope.$apply();
		};

		function numberKeypress(event){
			if($ctrl.productNameModel !== ""){
				$ctrl.barCodeModel = $ctrl.productNameModel.slice(-1);
				$ctrl.productNameModel = "";
			}
			else $ctrl.productNameModel = "";
			iFocus = false;
			$scope.$apply();
		};
	}
})();