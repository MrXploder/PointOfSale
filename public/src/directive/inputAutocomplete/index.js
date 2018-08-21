(function(){
	'use strict';
	
	angular
	.module('angularApp')
	.directive('inputAutocomplete', inputAutocompleteDirective);

	function inputAutocompleteDirective(){
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			controller: 'inputAutocompleteController',
			controllerAs: 'vm',
			bindToController: {
				bind: "=",
				data: "=",
			},
			template: '<input type="text" ng-model="vm.bind" id="{{vm.autocompleteRandomId}}" class="autocomplete">'
		}
	}
})();