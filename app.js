// Usage example with ExpressJS
var express = require('express');

var port = process.env.PORT || 8080/*,
host = '0.0.0.0'*/;

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + ''));

var index = require('./routes/index');
var emailController = require('./routes/emailController');
var indexBackground = require('./routes/indexBackground');

app.use('/', index);
app.use('/bg', indexBackground);

const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/', urlencodedParser, emailController.sendMail);

var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

module.exports = app;
