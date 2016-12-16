var express = require('express');
var router = express.Router();
var ctrlQuakeData = require('../controllers/earthquake');

/* GET home page. */
router.get('/earthquakeData/:City', ctrlQuakeData.quakeDataReadOne);
router.get('/earthquakeData', ctrlQuakeData.quakeDataReadAll);

module.exports = router;
