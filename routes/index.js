var express = require('express');
var router = express.Router();
var dropboxController = require('./dropboxController');

/* GET home page. */
router.get('/', dropboxController.home);

module.exports = router;
