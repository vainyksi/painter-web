var express = require('express');
var router = express.Router();


router.get('/1', function (req, res, next) {

    res.render('indexBackground', {
        // TODO move to config (from all modules)
        twitterLink: "#",
        facebookLink: "https://facebook.com/malujem.sk/",
        instagramLink: "https://www.instagram.com/malujem.sk/",
        bgName: "bg/1.jpg"
    });

});

router.get('/2', function (req, res, next) {

    res.render('indexBackground', {
        // TODO move to config (from all modules)
        twitterLink: "#",
        facebookLink: "https://facebook.com/malujem.sk/",
        instagramLink: "https://www.instagram.com/malujem.sk/",
        bgName: "bg/2.jpg"
    });

});

router.get('/3', function (req, res, next) {

    res.render('indexBackground', {
        // TODO move to config (from all modules)
        twitterLink: "#",
        facebookLink: "https://facebook.com/malujem.sk/",
        instagramLink: "https://www.instagram.com/malujem.sk/",
        bgName: "bg/3.jpg"
    });

});

router.get('/4', function (req, res, next) {

    res.render('indexBackground', {
        // TODO move to config (from all modules)
        twitterLink: "#",
        facebookLink: "https://facebook.com/malujem.sk/",
        instagramLink: "https://www.instagram.com/malujem.sk/",
        bgName: "bg/4.jpg"
    });

});

module.exports = router;
