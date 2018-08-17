(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Branches', branchesFactory);

	branchesFactory.$inject = ["$resource"];

	function branchesFactory($resource){
		const Resource = $resource("/branches", {});

		Resource.find = function(_q){
			return this.query(_q).$promise;
		}

		return Resource;
	}
})();