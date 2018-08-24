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

		$urlRouterProvider.when('', '/home'); /*redirect to home if user loads a no-routed page e.x: host without '#'  */
		$urlRouterProvider.otherwise('/home'); /*if state does not exists, redirect to home*/

		$stateProvider
		.state("login", {
			url: "/login",
			templateUrl: "src/route/login/template.html",
			controller: "loginController",
			controllerAs: "$ctrl",
			data: {requireLogin: false},
		})
		.state("logout", {
			url: "/logout",
			controller: "logoutController",
			controllerAs: "$ctrl",
			data: {requireLogin: false},
		})
		.state('home', {
			url: '/home',
			templateUrl: "src/route/home/template.html",
			controller: "homeController",
			controllerAs: "$ctrl",
			data: {requireLogin: true},
		})
		.state('pos', {
			url: '/pos',
			templateUrl: 'src/route/pos/template.html',
			controller: "posController",
			controllerAs: "$ctrl",
			data: {requireLogin: true},
		})
		.state('products', {
			url: '/manageProducts',
			templateUrl: 'src/route/manageProducts/template.html',
			controller: 'productsController',
			controllerAs: '$ctrl',
			data: {requireLogin: true},
		})
	}
})();