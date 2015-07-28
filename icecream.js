//4 flavours : choclate ,vanilla , beer , coffee
//cup or cone
//4 toppings - color rgb yellow


var net = require('net');
var fs = require('fs')
var port = 2000;
var i = 0;
var currentConnections = 0;
var flavorArr = [];

var icecream = function icecream (flavor,count){
	this.flavor = flavor;
	this.count = count;
}

var container = ["cone","cup"];
var topping = ["red","yellow","green","blue"];

var ice1 = new icecream("choclate",5);
var ice2 = new icecream("vanilla",5);
var ice3 = new icecream("beer",5);
var ice4 = new icecream("coffee",5);

var listOfIceCream = [ice1,ice2,ice3,ice4];


var server = net.createServer(function(connection){
	connection.on("data", function (clientData){
		var str = clientData.toString();
		var trimmed = str.trim();
		var finaldata = trimmed.split(" ");

		if (finaldata[0]==="buy"){
			for (var i=0; i< listOfIceCream.length ; i++){
				if ( listOfIceCream[i].flavor.indexOf(finaldata[1]) > -1){
					if (listOfIceCream[i].count > 0) {
					console.log("You want",listOfIceCream[i].flavor);
					listOfIceCream[i].count -= 1;
					console.log("there are",listOfIceCream[i].count,"left")
					} else if (listOfIceCream[i].count <= 0){
						console.log("this is why we cant have nice things");
					} else if ( finaldata[0]==="buy" && finaldata[2] === "cup"){
						console.log("fancy! Good job picking cup")
					} else if ( finaldata[0]==="buy" && finaldata[2]==="cone"){
						console.log("tastes weird, but your choice")
					} else if (container.indexOf(finaldata[2]) == -1){
						console.log("YOU CAN ONLY PICK FROM CUP OR CONE, GODDAMNIT")
					}
				}
			}

		} 	
	}) 
});


server.listen(port , function(){
	console.log("server in the port:",port);
})