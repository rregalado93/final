(function() {

angular
    .module('quakeApp')
    .controller('listCtrl', listCtrl);
    


function listCtrl($http) {
    var vm = this;
    vm.content = [];
    
    $http.get('/api/earthquakeData').then(function(response){ 
       
       vm.output = response.data;
       
       for (var i = 0; i < vm.output.length; i++)
       {
           vm.content.push({
           city : vm.output[i].City, 
           date : vm.output[i].Date, 
           magnitude : vm.output[i].Magnitude, 
           description : vm.output[i].Description});
       }
    });

    vm.pageHeader = {
        title: 'Quakes',
        strapline: 'Earthquake reporting app'
    };
    vm.sidebar = {
        content: "Get the latest information about earthquakes around the globe."
    };
    

}

})();