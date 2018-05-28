var angular = require('angular');

require('./componente-modelo.css');

module.exports = angular
    .module('pes-components.pes-componente-modelo', [])
    .directive('componenteModelo', require('./componente-modelo.directive')).name;
