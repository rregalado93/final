(function () {

  angular
    .module('quakeApp')
    .directive('navbar', navBar);

  function navBar () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/navBar/navBar.template.html'
    };
  }
})();