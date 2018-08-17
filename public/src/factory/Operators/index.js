(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Operators', operatorsFactory);

	operatorsFactory.$inject = ['$resource'];

	function operatorsFactory($resource){
		const Resource = $resource("/operators/branch/:branch", {
			branch: "@branch",
		});

		Resource.find = function(_q){
			return this.query(_q).$promise;
		}

		return Resource;
	}
})();