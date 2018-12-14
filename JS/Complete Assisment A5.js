function A5() {
	guess = document.getElementById("guess").value;
    guesses = document.getElementById("output");
     
      inc = inc+1; 
	 document.getElementById("count1").value = inc;

    
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You got the correct number! ("+guess+")" + alert("Congratulation!!! You did it in your " + inc + "th tries");
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "Your number is too high!("+guess+")";

    } else{
        guesses.value = guesses.value + "\r" + "Your number is too low!("+guess+")";

    }
    
    }


var numToGuess = Math.floor(Math.random()*1000);
var inc=0;




 	
