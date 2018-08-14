(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ui.router', 'ui.bootstrap', 'ngStorage', 'ngResource', 'ngDialog', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination'])

.constant('ENV', {shortSHA:'ea8b8a2',name:'master',SHA:'ea8b8a2e9949fa72be3e805e37d3693c6cfc6649',lastCommitTime:'"2018-08-12 23:49:30 -0300"',lastCommitAuthor:'"MrXploder"',lastCommitMessage:'"Initial commit\r\n"',currentUser:'MrXploder',lastCommitNumber:'1'})

;
})(angular);