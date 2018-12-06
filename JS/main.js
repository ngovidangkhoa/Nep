function test1(){

	var fName = prompt("What is your name?");
	var myColour = prompt ("Pick a colour, " + fName);

	if(myColour == "red") {
		console.log ("hahahahahaha mew mewwwwwwwwwww like red?, u suck!");
	}
	else if(myColour == "green"){
		console.log ("So? u still suck af!!!");
	}
}


function test2(){

	var age = prompt ("How old are you?");
	if(age < 14){
		alert ("that's not too old");
	}

	else if (age = 14){
		alert ("You are older than I thought");

	}

	else if (age>14){
		alert ("14 is a good age");
		}

		else { 
		alert ("Not a vaild age");

				}	
}


function test3(){

		var number = prompt ("Enter the number");
		if (number < 0){
			alert ("this is a negative number");
		}

		else if (number > 0){
			alert ("this a a positive number");
		}

		else if (number = 0){
			alert ("just a 0");
		}

	}

function FizzBuzz(){
	for ( var i=1; i <=100; i++) 
	{
		if (i%3 ===0 && i%5 ===0){
			console.log (i+"FizzBuzz");
		}

		else if (i%3 === 0){
			console.log( i+"Fizz");
		}

		else if (i%5 === 0){
			console.log (i+"Buzz");
		}

		else
			{
				console.log(i);
			}
		}
}







