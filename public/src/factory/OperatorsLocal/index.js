(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('OperatorsLocal', operatorsLocalFactory);

	operatorsLocalFactory.$inject = ['$localResource', "$localStorage"];

	function operatorsLocalFactory($localResource, $localStorage){
		const Resource = $localResource("operators");

		Resource.store = function(_d){
			$localStorage["operators"] = _d;
		}

		return Resource;
	}
})();