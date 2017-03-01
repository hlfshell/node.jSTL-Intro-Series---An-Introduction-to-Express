var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static(__dirname + "/static"));

var models = require('./models.js');

app.get("/", function(req, res){
	res.sendfile(__dirname + "/static/views/index.html");
});

app.get("/tweets", function(req, res){
	models.tweet.getAll(function(err, tweets){
		if(err) return res.status(500).send(err);
		res.send(tweets);
	});
});

app.post("/tweets", function(req, res){
	models.tweet.create(req.body.message, req.body.user, function(err){
		if(err) return res.status(500).end();
		res.end();
	});
});

app.listen(8000);