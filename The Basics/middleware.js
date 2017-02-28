var express = require('express');
var app = express();

app.get(
	function(req, res, next){
		if(req.get("SuperSecretAuthToken") == "supersecretcodeword") next();
		else res.status(401).end();
	},
	function(req, res, next){
		fs.readFile("./superSecretDocument.txt", function(err, data){
			res.send(data);
		});
	}
);