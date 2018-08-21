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
	angular
	.module('angularApp')
	.run(run);

	run.$inject = ["$rootScope", "$localStorage", "$sessionStorage", "$state", "$filter"];

	function run($rootScope, $localStorage, $sessionStorage, $state, $filter){
		$rootScope.$currentUser = () => $sessionStorage.currentUser;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			console.log("fromstate-->", fromState.name, "tostate-->", toState.name);
			if(toState.data.requireLogin && !$sessionStorage.currentUser){
				event.preventDefault();
				console.log("going to login state");
				$state.go("login");
			}
		});


	}
})();