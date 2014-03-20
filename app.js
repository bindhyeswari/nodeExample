
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var data = require('./data.js');


var mymodules = require('./mymodules.js');
mymodules.sayHello(data.counties);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
    res.json(200, {
        id: 32,
        name: 'krithika'
    });
});
app.get('/users', function(req, res){
    res.render('index', {
        id: 32,
        name: 'krithika'
    });
});

app.get('/raj', function(req, res){
    res.render('raj', {
        name: "Raj Powar"
    });
});

app.get('/ca/counties/:county_name', function(req, res){

    var county = mymodules.getCountyInfo(req.params.county_name, data.counties);

    if (county) {
        res.json(200, {
            county: county
        })
    } else {
        res.json(404, {
            message: 'Data does not exist for the county: ' + req.params.county
        })
    }


});

app.get('/ca/counties', function(req, res){
    res.render('ca', {});
});




http.createServer(app).listen(app.get('port'), function(){
    console.log('Up and running!');
});
