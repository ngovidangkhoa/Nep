function pattern(){
	
	for (var x=1; x<=6; x++)
	{
		if (x==1)
		{
			console.log (1 + "'*'");
		}
		else if (x==2)
		{
			console.log (2 +"'*'");
		}
		else if (x==3)
		{
			console.log (3+ "'*'");
		}
		else if (x==4)
		{
			console.log (4+"'*'");
		}
		else (x==6)
		{
			console.log (6+"'*'");
		}
	
	}
}

function gametest(){
var number;
var try1 = Math.floor(Math.random()*1000 + 1);
var n = 0;

if (number<try1){
	document.getElementById("Wrong").innerHTML="You are too low";
}
else if (number>try1){
	document.getElementById("Wrong").innerHTML="Too high!!!";
}

else if (number==try1){
	document.getElementById("Correct").innerHTML="Correct!!!, how do you feel?";
}
else{
	document.getElementById ("Wrong").innerHTML="is it a number?";
}
}

function A6(test123){
	return (test123.split(" con ")[1]);

}
console.log(A6("dit con me may"));