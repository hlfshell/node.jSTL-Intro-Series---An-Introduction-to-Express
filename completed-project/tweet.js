

module.exports = function(db){

	var Tweet = {

		getAll: function(cb){
			db('important_opinions')
				.asCallback(cb);
		},

		create: function(message, user, cb){
			db('important_opinions')
				.insert({
					message: message,
					user: user
				})
				.asCallback(cb);
		}

	};

	return Tweet;
};