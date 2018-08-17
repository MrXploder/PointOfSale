(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('ProductsLocal', productsLocalFactory);

	productsLocalFactory.$inject = ['$localResource', "$localStorage"];

	function productsLocalFactory($localResource, $localStorage){
		const Resource = $localResource("products");

		Resource.store = function(_d){
			$localStorage["products"] = _d;
		}

		return Resource;
	}
})();