(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('BranchLocal', branchLocalFactory);

	branchLocalFactory.$inject = ["$localResource", "$localStorage"];

	function branchLocalFactory($localResource, $localStorage){
		const Resource = $localResource("branch");

		Resource.find = function(_q){
			return this.query(_q).$promise;
		}

		Resource.store = function(_d){
			$localStorage["branch"] = _d;
		}

		return Resource;
	}
})();