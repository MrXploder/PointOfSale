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
	.run(support);

	support.$inject = ["$rootScope", "$localStorage", "loginModal", "$state"];

	function support($rootScope, $localStorage, loginModal, $state){
		var _default = {
			currentLicense: {
				key: null,
				status: null,
			},
			currentUser: {
				id: null,
				name: null,
				token: null,
			},
			filterParams: {
				filterByApplicant: '',
				filterByClient: '-1',
				filterCompletedOnes: false,
				pagesToShow: 5,
				itemsPerPage: 5,
				searchTerm: '',
				sortBy: 'id',
				sortReverse: false,
			}
		};

		activate();
		//////////////////////////////////////////

		function activate(){
			if(typeof $localStorage.currentUser === "undefined"){
				$localStorage.currentUser = _default.currentUser;
			}

			$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
				let requireLogin = toState.data.requireLogin;

				if(requireLogin && typeof $localStorage.currentUser === "undefined"){
					event.preventDefault();

					loginModal().then(function(){
						return $state.go(toState.name, toParams);
					})
					.catch(function(){
						return $state.go('home');
					});
				}
			});
		}
	}
})();