(function(){
	'use strict';

	angular
	.module('angularApp')
	.directive('toggleButton', toggleButtonDirective);

	function toggleButtonDirective(){
		return{
			template: '<button type="button" ng-click="$ctrl.toggleButtonClick()" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>',
			scope: {},
			bindToController: true,
			controllerAs: "$ctrl",
			controller: function(){
				let $ctrl = this;

				$ctrl.toggleButtonClick = function(){
					console.log("clicked");
					$("#wrapper").toggleClass("toggled");
				}
			},
		}
	}
})();