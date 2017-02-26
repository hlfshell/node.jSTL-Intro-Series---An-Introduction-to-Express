var knex = require('knex');

var db = knex({
	client: "mysql",
	connection:
		{
			host     : process.env.DATABASE_HOST,
			user     : process.env.DATABASE_USERNAME,
			password : process.env.DATABASE_PASSWORD,
			database : process.env.DATABASE_DB
		}
});

db('table_name')
	.where("attribute", "value")
	.asCallback(function(err, results){
		//Deal with the err
		console.log(results);
	});