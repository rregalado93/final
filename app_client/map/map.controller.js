(function() {
  
  console.log("I'm here before");
  
  angular
    .module('quakeApp')
    .controller('mapCtrl', mapCtrl);

 mapCtrl.$inject = ['$scope', 'uiGmapGoogleMapApi'];

function mapCtrl($scope, uiGmapGoogleMapApi) {
    var vm = this;
    console.log("I'm here");

    vm.map = {
      center: {
        latitude: 34.9824649,
        longitude: -101.9175232
      },
      zoom: 14
    };
    
    vm.pageHeader = {
        title: 'Quakes',
        strapline: 'Earthquake reporting app'
    };
    vm.sidebar = {
        content: "Get the latest information about earthquakes around the globe."
    };
    
    uiGmapGoogleMapApi.then(function(maps) {
      //vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    });
  }
})();