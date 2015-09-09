var http = require('http');  
var request = require('request');
var md5 = require('md5'); 
var superCounter = require('./sentenceCount');
var PORT = 8000; 
var server = http.createServer(function(req, res){
	
		console.log('\n\n');
		console.log('url:', req.url); 
		var array = req.url.split('/'); 	
		var endpoint = array[1]; 

		if (endpoint==="math") {
			var op = array[2];
			var num1 = parseFloat(array[3]);
			var num2 = parseFloat(array[4]);
			switch (op) {
				case 'add':
					var sum = num1+num2;
					res.end('<h1>'+sum+'</h1>');
					break;
				case 'subtract': 
					var difference = num1-num2;
				  res.end('<h1>'+difference+'</h1>');  		
				  break;
				case 'multiply': 		
					var product = num1*num2;
					res.end('<h1>'+product+'</h1>');		   
					break;
			  case 'divide':		  	
		    	var quotient = num1;
		    	quotient /= num2; 
		    	res.end('<h1>'+quotient+'</h1>'); 
		    	break;
				default:
					res.end('nope');    
			}

		} else if (endpoint==="words"){
			var str = array[2];
			// you will receieve it as an encoded string and you'll have to decode it. 
			console.log("first", str); 
			str = decodeURI(str);
			console.log("second", str); 
			// encodeURIComponent(str)
			var object = superCounter(str);
			console.log(object);
			res.write('<style>h1 {color: purple;}</style><h1>'+str+'</h1>');
			res.write('<h1>Words: '+object.words+'</h1>');
			res.write('<h1>Spaces: '+object.spaces+'</h1>');
			res.write('<h1>Letters: '+object.letters+'</h1>');
			res.end();
		// } else if (endpoint === 'gravatar') {
		// 	var email = array[2]; 
		// 	var hash = md5(email); 
		// 	var gravatarurl = 'www.gravatar.com/avatar/' + hash; 
		// 	var html = "<img src='"+ gravatarurl +"'></img>"; 
		// 	res.setHeader("Content-Type", "test/html");
		// 	// res.end(html); 
		// 	// res.writeHead(302, {
		// 	// 		'Location': gravatarurl
		// 	// }); 
		// 	res.end(html);
		// } else {
			res.end('nope');
		}
}); 

server.listen(PORT, function(){				
		console.log("Server now listening on port " + PORT + "! ;)")
	});

console.log('end of file'); 


// var wordCount = function(text){
// 	var count = 0;
// 	for (var i = 0; i < text.length; i++){
// 		if (text[i] === " ") {
// 			count = count + 1; 
// 		};
// 	}
// 	return count + 1; 
// }; 

// var letters = function(text){
// 	var regexp = /[a-z]/gi;
// 	var array = text.match(regexp); 
// 	return array.length; 
// };

// var spaceCount = function(text){
// 	var count = 0; 
// 	for (var i = 0; i < text.length; i++) {
// 		if (text[i] === " "){
// 			count = count + 1;
// 		}
// 	}
// 	return count; 
// };

// var superCounter = function(text){
// 	var singleObject = {
// 		words: wordCount(text),
// 		spaces: spaceCount(text), 
// 		letters: letters(text)
// 	};
// 	return singleObject;
// };