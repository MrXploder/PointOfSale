(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ui.router', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'angular-local-resource', 'focus-if', 'templates-main'])

.constant('ENV', {shortSHA:'6da3247',name:'master',SHA:'6da32470e876ccf889914e6ee519f3f9fac6c6ca',currentUser:'MrXploder',lastCommitMessage:'"first module done\r\n"',lastCommitTime:'"2018-08-19 19:35:53 -0300"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'4'})

;
})(angular);