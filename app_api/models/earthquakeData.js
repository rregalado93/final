var mongoose = require('mongoose');

var EarthquakeSchema = new mongoose.Schema({
	City: String,
	Year: String,
	Magnitude: String,
	Description: String,
});

mongoose.model('EarthquakeData', EarthquakeSchema, 'EarthquakeData');