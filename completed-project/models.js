var knex = require('knex');

db = knex({
	client: 'mysql',
	connection: {
		host: "127.0.0.1",
		user: "root",
		password: "password",
		database: "twitter_clone"
	}
});


var models = {};

models.tweet = require('./tweet.js')(db);

module.exports = models;
