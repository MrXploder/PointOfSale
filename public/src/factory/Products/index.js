(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Products', productsFactory);

	productsFactory.$inject = ['$resource'];

	function productsFactory($resource){
		const Resource = $resource("/products/:id", {
			id: "@_id",
		}, {
			create: {
				method: "POST",
			},
			read: {
				method: "GET",
				isArray: true,
			},
			update: {
				method: "PUT",
			},
			delete: {
				method: "DELETE",
			},
		});

		Resource.prototype.$save = function(){
			let self = this;

			if(self._id) {
				return self.$update();
			}
			else {
				return self.$create();
			}
		}

		function _find(_q){
			return Resource.query(_q).$promise;
		}

		return {
			find: _find,
			resource: Resource,
		}
	}
})();