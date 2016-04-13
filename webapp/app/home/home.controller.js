(function() {
    'use strict';

    angular
        .module('encurtadorUrl')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['EncurtadorService'];

    /* @ngInject */
    function HomeController(EncurtadorService) {
        var vm = this;

        vm.url = '';
        vm.urlEncurtada = '';
        vm.urlEncurtadaTrigger = false;
        vm.encurtarUrl = encurtarUrl;

        activate();

        function activate() {
          
        }

        function encurtarUrl(url){
            vm.urlEncurtada = '';
            vm.urlEncurtadaTrigger = false;
            EncurtadorService.encurtarUrl(url).then(function(data){
              vm.urlEncurtada = data.data.shortUrl;
              vm.urlEncurtadaTrigger = true;
            }, function(err){
              vm.urlEncurtada = "Que pena! Ocorreu algum erro. Tente novamente mais tarde";
              vm.urlEncurtadaTrigger = true;
            });
        }
    }
})();
