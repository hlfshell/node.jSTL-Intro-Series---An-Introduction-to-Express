var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var knex = require('knex');

app.use(bodyParser.json());
app.use(express.static(__dirname__ + "/static"));

db = knex({
	client: 'mysql',
	connection: {
		host: 127.0.0.1,
		user: "root",
		password: "password",
		database: "twitter_clone"
	}
});






app.listen(8000);