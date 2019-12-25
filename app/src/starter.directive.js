'use strict'

module.exports = directive;

directive.$inject = [];
function directive() {
    return {
        restrict: 'E',
        template: require('./starter.directive.html'),
        scope: {},
        bindToController: {},
        controller: controller,
        controllerAs: 'vm'
    };
}

controller.$inject = ['StarterService'];
function controller(StarterService) {
    var vm = this;

    vm.starter = StarterService.get();
}
