var resetTweets = function(){
	$.get("/tweets", function(tweets){
		$('#tweets').html("");
		tweets.forEach(function(tweet){

			$('#tweets')
				.append("<div class='tweet'> " + tweet.message + "<br/> -" + tweet.user + "</div>");

		});

		console.log("Done");
	});
};

var saveTweets = function(){
	$.post("/tweets", {
		message: $('#message').val(),
		user: $('#user').val()
	}, function(data){
		resetTweets();
	});
}


$(window).ready(function(){

	resetTweets();

	$('.button').click(function(){
		saveTweets();
	});

});