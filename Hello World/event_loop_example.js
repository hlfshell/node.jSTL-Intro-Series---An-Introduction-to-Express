var fs = require('fs');

fs.readFile("./someFile.txt", function(err, fileContents){
	console.log("World!");
});
console.log("Hello");