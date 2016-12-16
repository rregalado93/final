
    angular
        .module('quakeApp')
        .service('x', x);



    function x($http) {
  
        var getData =  function(){
            return $http.jsonp('http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02', 
            {
                    jsonpCallbackParam: 'callback'
                });        
        }        

        return {
            getData: getData,
        };
    }
  /*
        var getData =  function(){
            return $http.get('http://api.sigimera.org/v1/crises?auth_token=pYoCeHLDJqc-9fRMi9Ns');        
        }        

        return {
            getData: getData,
        };
        */
       /*
        var getData =  function(){
            return $http.jsonp('https://api.sigimera.org/v1/crises?auth_token=pYoCeHLDJqc-9fRMi9Ns'
                     + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        }
        return {
            getData: getData
        };
    }
    */
    
//I tried many APIs to retrieve earthquake data, all of them give me cross-site error
//http://api.sigimera.org/v1/crises?auth_token=pYoCeHLDJqc-9fRMi9Ns
//http://kuakes.com/json/
//CORS header ‘Access-Control-Allow-Origin’ missing