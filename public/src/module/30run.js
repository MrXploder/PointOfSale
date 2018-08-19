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
	.run(runBlock);

	runBlock.$inject = ["$rootScope", "$localStorage", "$sessionStorage", "$state"];

	function runBlock($rootScope, $localStorage, $sessionStorage, $state){
		/*alias for convenience - this ones will be all over the app, so try to remember them*/
		$db 				 = $localStorage;
		$rootScope.$currentUser = () => $sessionStorage.currentUser;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			console.log("fromstate-->", fromState.name, "tostate-->", toState.name);
			if(toState.data.requireLogin && !$sessionStorage.currentUser){
				event.preventDefault(); /*prevent from change the URL*/
				console.log("going to login state");
				$state.go("login"); /*redirect to login Page*/
			}
		});
	}
})();