var express = require('express');
var router = express.Router();
// var controller = require('../controller');

/* GET home page. */
router.get('/', function(req, res, next){

    var images = ["images/album/1.jpg",
        "images/album/2.jpg",
        "images/album/3.jpg",
        "images/album/4.jpg",
        "images/album/5.jpg",
        "images/album/6.jpg",
        "images/album/7.jpg"];

    return res.render('index', {
        myCustomTitle : "ahoj :) - TODO remove",
        my_images : images
    });
});

// router.get('/login', controller.login);
//
// router.get('/logout', controller.logout);
//
// router.get('/oauthredirect',controller.oauthredirect);

module.exports = router;
