(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Products', productsFactory);

	productsFactory.$inject = ['$resource'];

	function productsFactory($resource){
		const Resource = $resource("/products/branch/:branch", {
			branch: "@branch",
		});

		Resource.find = function(_q){
			return this.query(_q).$promise;
		}

		return Resource;
	}
})();