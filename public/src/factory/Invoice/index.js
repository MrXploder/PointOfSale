(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Invoice', invoiceFactory);

	invoiceFactory.$inject = ['$resource'];

	function invoiceFactory($resource){
		const Resource = $resource("/invoices/:id", {
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

			self.product_list.forEach(function(item, index, array){
				self.product_list[index].product_id = angular.copy(self.product_list[index].product_id._id);
			});

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

		Resource.prototype.sub = function(){
			return _.reduce(this.product_list, (total, item) => total += item.product_id.price * item.qty, 0);
		}

		Resource.prototype.taxes = function(){
			return this.sub() * 0.19;
		}

		Resource.prototype.discount = function(){
			return 0;
		}

		Resource.prototype.total = function(){
			return this.sub() + this.taxes() + this.discount();
		}

		Resource.prototype.add = function(_d){
			this.product_list.push({product_id: _d, qty: 1});
		}

		Resource.prototype.length = function(){
			return _.reduce(this.product_list, (total, item) => total += item.qty, 0);
		}

		Resource.prototype.remove = function(_d){
			this.product_list.splice(this.product_list.indexOf(_d), 1);
		}

		return {
			find: _find,
			resource: Resource,
		}
	}
})();