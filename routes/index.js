var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {
        // TODO move to config (from all modules)
        twitterLink: "#",
        facebookLink: "https://facebook.com/malujem.sk/",
        instagramLink: "https://www.instagram.com/malujem.sk/"
    });

});

module.exports = router;
