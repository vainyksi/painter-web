// Usage example with ExpressJS
var express = require('express'),
port = process.env.PORT || 8080/*,
host = '0.0.0.0'*/;

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + ''));

// In your project, this would be require('node-gallery')
// app.use('/gallery', require('node-gallery')({
//   staticFiles : 'resources/photos',
//   urlRoot : 'gallery',
//   title : 'Example Gallery',
//   render : false // 
// }), function(req, res, next){
//   return res.render('gallery', { galleryHtml : req.html });
// });

app.use('/', function(req, res, next){
	return res.render('index', { myCustomTitle : "ahoj :) - TODO remove" });
});


var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
