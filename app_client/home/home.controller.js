angular
    .module('quakeApp')
    .controller('homeCtrl', homeCtrl);



function homeCtrl($scope, $http, x) {
    var vm = this;
    console.log(window.location); 
    vm.pageHeader = {
        title: 'Quakes',
        strapline: 'Earthquake reporting app'
    };
    vm.sidebar = {
        content: "Get the latest information about earthquakes around the globe."
    };

    
    x.getData().then(function my(response){
        vm.output = response;
        }, function myError(response){
            alert(response);
        });
}
