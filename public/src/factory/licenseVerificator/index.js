(function(){
   'use strict';

   angular
   .module('angularApp')
   .factory('licenseVerificator', licenseVerificator);

   licenseVerificator.$inject = ["$resource"];

	function licenseVerificator($resource){
		return $resource("http://validateand.servehttp.com/restapi/license.php",{},{
			validate:{
				method: 'GET',
				params: {
					validate: true,
				}
			},
			isValid:{
				method: 'GET',
				params: {
					verify: true,
				}
			}
		});
	};
})();


