var angular = require('angular');

module.exports = angular
    .module('starter', [])
    .factory('StarterService', require('./starter.service'))
    .directive('starter', require('./starter.directive')).name;
