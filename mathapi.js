var http = require('http');  
var request = require('request');
var PORT = 8000; 
var server = http.createServer(function(req, res){
	
		console.log('\n\n');
		console.log('url:', req.url); 
		var array = req.url.split('/'); 
		var op = array[2];
		var num1 = parseFloat(array[3]);
		var num2 = parseFloat(array[4]);
		if (array[1]==="math") {
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

		} else {
			res.end('nope');
		}			
}); 

server.listen(PORT, function(){				
		console.log("Server now listening on port " + PORT + "! ;)")
	});

console.log('end of file'); 