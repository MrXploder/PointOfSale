(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(uiRouterProvider);

	uiRouterProvider.$inject  = ["$stateProvider", "$urlRouterProvider"];


	function uiRouterProvider($stateProvider, $urlRouterProvider){
		let requireBeforeChange = {
			requireLogin: true,
		};

		$urlRouterProvider.when('', '/home'); /*redirect to home if user loads a no-routed page e.x: host without #*/
		$urlRouterProvider.otherwise('/home'); /*if state does not exists, redirect to home*/

		$stateProvider
		.state("login", {
			url: "/login",
			templateUrl: "src/module/route/login/template.html",
			controller: "loginController",
			controllerAs: "$ctrl",
			data: {requireLogin: false},
		})
		.state('home', {
			url: '/home',
			templateUrl: "src/module/route/home/template.html",
			controller: "homeController",
			controllerAs: "$ctrl",
			data: requireBeforeChange,
		})
		.state('pos', {
			url: '/pos',
			templateUrl: 'src/module/route/pos/template.html',
			controller: "posController",
			controllerAs: "$ctrl",
			data: requireBeforeChange,
		})
		.state('products', {
			url: '/manageProducts',
			templateUrl: 'src/module/route/manageProducts/template.html',
			controller: 'productsController',
			controllerAs: '$ctrl',
			data: requireBeforeChange,
		})
	}
})();