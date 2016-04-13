(function() {
    'use strict';

    angular
        .module('encurtadorUrl')
        .service('EncurtadorService', EncurtadorService);

    EncurtadorService.$inject = ['$http'];

    /* @ngInject */
    function EncurtadorService($http) {
        this.encurtarUrl = encurtarUrl;

        function encurtarUrl(url) {
          return $http({
               method: 'POST',
               url: "http://localhost:8000/users/assemany/urls",
               data: $.param({url: url}),
               headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        }
    }
})();
