app.get("/user", function(req, res){
	//Some route about users
})

app.get("/user/:userId", function(req,res){ 
	console.log(req.params.userId) // <~ This will be equal to the value above!
	/* this will always be hit */
});

app.get("/user/create", function(req, res){
	/* this will never be hit */
});

app.get("/user/:userId/send/message/to/:toUser", function(req, res){
	console.log(req.params);
	/*
	{
		userId: someValue,
		toUser: someOtherValue
	}
	*/
});