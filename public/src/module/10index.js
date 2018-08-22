(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ui.router', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'angular-local-resource', 'focus-if', 'templates-main'])

.constant('ENV', {currentUser:'MrXploder',shortSHA:'3aefd79',SHA:'3aefd799da3f73753b27d1636ebbac8eec0a4df9',name:'master',lastCommitTime:'"2018-08-21 14:33:58 -0300"',lastCommitMessage:'"working on getDiscounts method\r\n"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'5'})

;
})(angular);