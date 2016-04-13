(function() {
    'use strict';

    angular
        .module('encurtadorUrl')
        .service('EncurtadorService', EncurtadorService);

    EncurtadorService.$inject = ['$http'];

    /* @ngInject */
    function EncurtadorService($http) {
        this.encurtar = encurtar;

        function encurtar() {
          
        }
    }
})();
