(function(){
	'use strict';

	angular
	.module('angularApp')
	.factory('Auth', authFactory);

	authFactory.$inject = ["$http", "$localResource", "$localStorage", "$sessionStorage", "Operators", "Products", "Invoices", "Branches"];

	function authFactory($http, $localResource, $localStorage, $sessionStorage, Operators, Products, Invoices, Branches){
		const $db = $localStorage;
		const Resource = function(){}

		Resource.prototype.$logIn = function(){
			let self = this;
			return $http.post("/auth", {rut: self.rut, password: self.password}).then(function(user){
				return new Promise(function(resolve, reject){
					$sessionStorage.currentUser = user.data;
					console.log("login successful");
					console.log("asdasd--->", Operators.$valid());
					if(!Operators.$valid() || !Products.$valid() || !Invoices.$valid() || !Branches.$valid()){
						console.log("LocalDB seems empty or defective. I will try to pull all the resources from ServerDB");

						Promise.all([Operators.$pull(), Products.$pull(), Invoices.$pull(), Branches.$pull()])
						.then(() => resolve())
						.catch(() => {
							console.log("Error fatal!");
							reject();
						});
					}
					else{
						console.log("LocalDB seems fine");
						resolve();
					}
				});
			});
		}

		return Resource;
	}
})();