var express = require('express'),
    path = require('path'),
    mime = require('mime'),
    fs = require('fs'),
    app = express();

//set the port
app.set('port', 3001);

var staticdir = __dirname;
console.log('staticdir', staticdir);

app.use(express.static(staticdir));
// Listen for requests
var server = app.listen(app.get('port'), function() {
    console.log('Server running on http://localhost:' + app.get('port'));
    console.log('Serving pages from ' + staticdir);
});