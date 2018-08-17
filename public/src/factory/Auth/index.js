(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Auth', authFactory);

	authFactory.$inject = ["$resource"];

	function authFactory($resource){
		const Resource = $resource("/auth", {});

		Resource.prototype.$check = function(){
			return this.$save();
		}

		return Resource;
	}
})();