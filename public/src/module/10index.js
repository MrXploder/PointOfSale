(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ui.router', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'angular-local-resource', 'templates-main'])

.constant('ENV', {lastCommitTime:'"2018-08-17 02:30:29 -0300"',currentUser:'MrXploder',shortSHA:'baa6e14',SHA:'baa6e14f62e49bbd96693bb19d23b66b880acb1b',name:'master',lastCommitMessage:'"progress\r\n"',lastCommitAuthor:'"MrXploder"',lastCommitNumber:'3'})

;
})(angular);