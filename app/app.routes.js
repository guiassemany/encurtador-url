(function() {
  'use strict';

  angular.module('encurtadorUrl')
    .config(routesConfig);

  function routesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          "conteudo": {
            templateUrl: "home/home.html"
          }
        }
      })
      .state('app.home', {
        url: "/home",
        views: {
          "conteudo@": {
            templateUrl: "home/home.html",
            controller: "HomeController",
            controllerAs: "home"
          }
        }
      });
  }

}());
