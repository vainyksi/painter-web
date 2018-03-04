// Usage example with ExpressJS
var express = require('express'),
port = process.env.PORT || 8080/*,
host = '0.0.0.0'*/;

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + ''));

var index = require('./routes/index');

app.use('/', index);

var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

module.exports = app;
