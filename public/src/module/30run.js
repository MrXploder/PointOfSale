/*
*
* @author  "MrXploder"
* @company "EleDevelopment SpA."
* @date		 "May/2018"
* @about   "This is a Run method from AngularJS that handles
the initialization of the ngStorage enviroment variables"
*
*/
(function(){
	'use strict';

	angular
	.module('angularApp')
	.run(startUp);

	startUp.$inject = ["$rootScope", "$localStorage", "$sessionStorage", "$state", "$interval", "Products"];

	function startUp($rootScope, $localStorage, $sessionStorage, $state, $interval, Products){
		$rootScope.$currentUser = () => $sessionStorage.currentUser;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			if(toState.data.requireLogin && !$sessionStorage.currentUser){
				event.preventDefault();
				$state.go("login");
			}
		});
	}
})();