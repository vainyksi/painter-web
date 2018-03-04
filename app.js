// Usage example with ExpressJS
var express = require('express'),
port = process.env.PORT || 8080/*,
host = '0.0.0.0'*/;

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + ''));

app.use('/', function(req, res, next){

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


var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
