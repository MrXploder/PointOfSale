(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('InvoicesLocal', invoicesLocalFactory);

	invoicesLocalFactory.$inject = ['$localResource', "$sessionStorage", "$localStorage"];

	function invoicesLocalFactory($localResource, $sessionStorage, $localStorage){
		const Resource = $localResource("invoices");

		Resource.store = function(_d){
			$localStorage["invoices"] = _d;
		}

		Resource.prototype.$save = function(){
			let self = this;

			self.product_list.forEach(function(item, index, array){
				self.product_list[index]._id = angular.copy(self.product_list[index].product_id._id);
			});

			if(!self.operator_id) self.operator_id = $sessionStorage.currentUser._id;

			if(self._id) {
				return self.$update();
			}
			else {
				return self.$create();
			}
		}

		Resource.prototype.$getSubTotal = function(){
			if(!this.product_list) this.product_list = [];
			return _.reduce(this.product_list, (total, item) => total += item.product_id.price * item.qty, 0);
		}

		Resource.prototype.$getTaxes = function(){
			return this.$getSubTotal() * 0.19;
		}

		Resource.prototype.$getDiscounts = function(){
			return 0;
		}

		Resource.prototype.$getTotal = function(){
			return (this.$getSubTotal() + this.$getTaxes()) - this.$getDiscounts();
		}

		Resource.prototype.$getChange = function(){
			if(!this.pay_amount) this.pay_amount = 0;
			if(this.pay_amount >= this.$getTotal()) return this.pay_amount - this.$getTotal();
			else return 0;
		}

		Resource.prototype.$isValid = function(){
			return (this.pay_amount >= this.$getTotal());
		}

		Resource.prototype.$add = function(_d){
			if(!this.product_list) this.product_list = [];
			this.product_list.push({product_id: _d, qty: 1});
		}

		Resource.prototype.$length = function(){
			if(!this.product_list) this.product_list = [];
			return _.reduce(this.product_list, (total, item) => total += item.qty, 0);
		}

		Resource.prototype.$remove = function(_d){
			if(!this.product_list) this.product_list = [];
			this.product_list.splice(this.product_list.indexOf(_d), 1);
		}

		Resource.prototype.$plusOne = function(_d){
			if(!this.product_list) this.product_list = [];
			this.product_list[this.product_list.indexOf(_d)].qty++;
		}

		Resource.prototype.$minusOne = function(_d){
			if(!this.product_list) this.product_list = [];
			if(this.product_list[this.product_list.indexOf(_d)].qty > 1) this.product_list[this.product_list.indexOf(_d)].qty--;
		}

		return Resource;
	}
})();