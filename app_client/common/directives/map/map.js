    var script = document.createElement('script');
        script.setAttribute(
            'src',
            'https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json');
        document.getElementsByTagName('head')[0].appendChild(script);
      

      // Defines the callback function referenced in the jsonp file.
      function eqfeed_callback(data) {
        map.data.addGeoJson(data);
      }