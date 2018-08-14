(function () {
  'use strict';

  angular
  .module('angularApp')
  .directive('autofocus', autofocusDirective);

  autofocusDirective.$inject = ["$timeout"];

  function autofocusDirective($timeout){
    return {
      restrict: 'A',
      link: function ($scope, $element) {
        $timeout(function () {
          $element[0].focus();
        });

        $element.on('blur', function(){
          $element[0].focus();
        });
      }
    }
  }
})();