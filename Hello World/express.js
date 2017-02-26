const express = require('express');
var app = express();

app.get("*", function(req, res){
	console.log("Request to", req.originalUrl);

	res.send("Hello world!");
});

app.listen(9001);