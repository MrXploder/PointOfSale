(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(uiRouterProvider);

	uiRouterProvider.$inject  = ["$stateProvider", "$urlRouterProvider"];


	function uiRouterProvider($stateProvider, $urlRouterProvider){
		let resolve = {
			requireLogin: true,
			requireDbPopulation: true,
		};

		$urlRouterProvider.when('', '/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: "src/module/route/home/template.html",
			controller: "homeController",
			controllerAs: "hmc",
			data: resolve,
		})
		.state('pos', {
			url: '/pos',
			templateUrl: 'src/module/route/pos/template.html',
			controller: "posController",
			controllerAs: "$ctrl",
			data: resolve,
		})
		.state('products', {
			url: '/manageProducts',
			templateUrl: 'src/module/route/manageProducts/template.html',
			controller: 'productsController',
			controllerAs: '$ctrl',
			data: resolve,
		})
	}
})();