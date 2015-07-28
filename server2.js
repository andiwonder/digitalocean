var net = require('net');
var port = 2000;
var i = 0;
var currentConnections = 0;

var server = net.createServer(function(connection){

	connection.write("Lets do Math");

	connection.on("data", function (datafromClient){
		var str = datafromClient.toString();
		var trimmed = str.trim();
		var finaldata = trimmed.split(" ");
		var num1 = parseInt(finaldata[1]);
		var num2 = parseInt(finaldata[2]);

		if (finaldata[0]==="add"){
			var num3 = num1 + num2;
		} else if (finaldata[0]==="sub"){
			var num3 = num1 - num2;
		} else if (finaldata[0]==="multi"){
			var num3 = num1 * num2;
		} else if (finaldata[0]==="div"){
			var num3 = num1 / num2;
		} else {
			connection.write("nuff math!")
		}

		
		console.log(num3);
		var finalanswer = num3.toString();
		connection.write(finalanswer);
	}) 
});


server.listen(port , function(){
	console.log("server in the port:",port);
})