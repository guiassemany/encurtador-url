(function(){
  'use strict';

  angular.module('encurtadorUrl')
         .config(loadingBar);

  function loadingBar(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeSpinner = true;
      cfpLoadingBarProvider.includeBar = true;
  }

}());
