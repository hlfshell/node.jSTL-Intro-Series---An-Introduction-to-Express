const express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get("/", function(req, res){
	res.render("index",
		{
			key: value,
		}
	);
});

app.listen(9001);