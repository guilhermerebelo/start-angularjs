'use strict'

var STARTER = 'STARTER AngularJs';

module.exports = Service;

Service.$inject = [];
function Service() {
    return {
        get: get
    };


    function get() {
        return STARTER;
    }
}