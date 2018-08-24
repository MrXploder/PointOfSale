(function(angular){
	'use strict';

	angular
	.module('angularApp', [
		'ui.router',
		'ngStorage',
		'ngResource',
		'ngDialog',
		'platanus.rut',
		'angular-loading-bar',
		'angular-local-resource',
		'angularUtils.directives.dirPagination',
		'focus-if',
		'templates-main',
	]);

})(angular);