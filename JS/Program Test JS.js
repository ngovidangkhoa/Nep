Program Test JS

function A6(plaintext){

var ciphertext="";

var wordlist=plaintext.split(" ");

for(var i=0; i<wordlist.length; i++){

if(wordlist[i].length > 2){

ciphertext = ciphertext + wordlist[i].substring(1,) + wordlist[i][0]+"ay ";

} else {

ciphertext = ciphertext + wordlist[i] + " ";

}

}

return (ciphertext);

}

console.log(pigencr("hello my name is simon"));