function A6(plaintext){


var ciphertext="";

var wordlist=plaintext.split(" ");

for(var i=0; i<wordlist.length; i++){

if(wordlist[i].length > 2){

ciphertext = ciphertext + wordlist[i].substring(1, ) + wordlist[i][0]+ " cts " + wordlist[i].toUpperCase() + " Fish! ";

}

else {

ciphertext = ciphertext + wordlist[i] + "tsc " + "fake";

}

}

return ("tsccts " + ciphertext + "tsccts");

}

getElementById('demo').innerHTML=(A6("Fish is fish, but dog is not a fish"));

