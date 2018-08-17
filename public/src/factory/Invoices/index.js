(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Invoices', invoicesFactory);

	invoicesFactory.$inject = ["$resource"];

	function invoicesFactory($resource){
		const Resource = $resource("invoices/branch/:branch", {
			branch: "@branch"
		});

		Resource.find = function(_q){
			return this.query(_q).$promise;
		}

		return Resource;
	}
})();