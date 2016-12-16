var mongoose = require('mongoose');
var EarthquakeData = mongoose.model('EarthquakeData');

var sendJSONresponse = function(res, content) {
  res.json(content);
};


/*
module.exports.earthquakeData = function(req, res) {
  console.log('Finding data');
    EarthquakeData
      .find()
      .exec(function(err, _x) {
        sendJSONres(res, _x);
      });
};

*/
//// QUAKE DATA ////////////////////////////////////////////////////////////////
/* GET all QuakeData records */
module.exports.quakeDataReadAll = function(req, res) {
    console.log("Finding all Earthquake Data Records", req);
    EarthquakeData
        .find({})
        .exec(function(err, earthquakeData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(earthquakeData);
            sendJSONresponse(res, earthquakeData);
        });
}

/* GET QuakeData by weight */
module.exports.quakeDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        EarthquakeData
            .find({
                weight: req.params.weight
            })
            .exec(function(err, earthquakeData) {
                if (!earthquakeData) {
                    sendJSONresponse(res, 404, {
                        "message": "Earthquake value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(earthquakeData);
                sendJSONresponse(res, 200, earthquakeData);
            });
    }
    else {
        console.log('No Earthquake value specified');
        sendJSONresponse(res, 404, {
            "message": "No Earthquake value in request"
        });
    }
};
