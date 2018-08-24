/*
*
* @author  "MrXploder"
* @company "EleDevelopment SpA."
* @date		 "May/2018"
* @about   ""
*
*/
(function(){
	'use strict';

	angular
	.module('angularApp')
	.run(startUp);

	startUp.$inject = ["$rootScope", "$localStorage", "$sessionStorage", "$state", "$window", "Products"];

	function startUp($rootScope, $localStorage, $sessionStorage, $state, $window, Products){
		$rootScope.$currentUser = () => $sessionStorage.currentUser;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			if(toState.data.requireLogin && !$sessionStorage.currentUser){
				event.preventDefault();
				$state.go("login");
			}
		});

		/*dispatch an event to all child scopes how are interested in catch this special eventListener*/
		/*we do this way so we dont have to attach a eventListener in every scope.controller*/
		$window.addEventListener("keypress", function(event){
			/*numbers*/
			if(event.which >= 48 && event.which <= 57){
				$rootScope.$broadcast('$numberKeypressCustomEvent');
			}
			/*letters*/
			else if(event.which >= 97 && event.which <= 122){
				$rootScope.$broadcast('$letterKeypressCustomEvent');
			}
		});
	}
})();