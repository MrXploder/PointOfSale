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

	runBlock.$inject = ["$rootScope", "$localStorage", "$sessionStorage", "loginModal", "$state", "Operators", "OperatorsLocal", "Products", "ProductsLocal", "ngDialog", "Invoices", "InvoicesLocal"];

	function runBlock($rootScope, $localStorage, $sessionStorage, loginModal, $state, Operators, OperatorsLocal, Products, ProductsLocal, ngDialog, Invoices, InvoicesLocal){
		/*alias for convenience - this ones will be all over the app, so try to remember them*/
		$db 				 = $localStorage;

		if(_.isEmpty($db.operators) || _.isEmpty($db.products) || _.isEmpty($db.branch) || _.isEmpty($db.invoices)){
			console.log("La base de datos interna está vacia, por lo que significa que es la primera vez que se usa la aplicacion. Un Operador nivel 3 debe iniciar sesion primero. Para habilitar la App.");
			ngDialog.openConfirm({
				templateUrl: "src/module/dialog/populate/template.html",
				controller: "populateController",
				controllerAs: "$ctrl",
			})
			.then(function(response){
				updateLocalDB();
				attachRouterEvents();
			});
		}
		else if(_.isEmpty($sessionStorage.currentUser)){
			loginModal()
			.then(() => {
				updateLocalDB();
				attachRouterEvents();
			});
		}
		else{
			updateLocalDB();
			attachRouterEvents();
		}

		function attachRouterEvents(){
			/*attach angularjs-eventListener (this are angularjs events BTW)*/
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
				let requireLogin 				= toState.data.requireLogin;
				let requireDbPopulation = toState.data.requireDbPopulation;

				if(requireLogin && typeof $sessionStorage.currentUser === "undefined"){
					event.preventDefault(); /*prevent from change the URL*/
					loginModal()
					.then(function(){
						$state.go(toState.name, toParams); /*passtrough*/
					})
					.catch(function(){
						$state.go('home'); /*redirect to home*/
					});
				}
			});
		}

		function updateLocalDB(){
			/*update localDB based on the given branch._id stored on localStorage.branch._id*/
			let branch = $db.branch._id;

			Promise
			.all([Operators.find({branch}), Products.find({branch}), Invoices.find({branch})])
			.then(responseArray => {
				OperatorsLocal.store(responseArray[0]);
				ProductsLocal.store(responseArray[1]);
				InvoicesLocal.store(responseArray[2]);
				console.log("done!");
			})
			.catch(() => console.log("fatal error!"));
		}
	}
})();