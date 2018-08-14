(function(){
	'use strict';

	angular
	.module('angularApp')
	.config(localStorageConfig);

	localStorageConfig.$inject  = ["$localStorageProvider"];

	function localStorageConfig($localStorageProvider){
		$localStorageProvider.setKeyPrefix('PointOfSale-');
	}
})();