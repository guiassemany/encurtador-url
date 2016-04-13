(function() {
    'use strict';

    angular
        .module('encurtadorUrl')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['EncurtadorService'];

    /* @ngInject */
    function HomeController(EncurtadorService) {
        var vm = this;

        activate();

        function activate() {
          
        }
    }
})();
