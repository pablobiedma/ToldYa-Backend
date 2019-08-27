//var bitcore = require("bitcore-lib") // Adding bitcore library
var submit = document.getElementById("submit");
//var privateKey = new bitcore.PrivateKey(secret); //we add our private key here 

submit.onclick = function () {
    var message = document.getElementById("message").value;
    var secret = document.getElementById("private").value;
    var public = document.getElementById("public").value;
    console.log(message);
    console.log(secret);
    console.log(public);
}


//var utxo = {
//  "txId" : "", //waiting for maximme
//    "outputIndex": 0, //waiting for maximme
//    "address": public,  
//    "script": "00140a19cc70549b02a9e6d9e496e7ecbfbc54026367",  //waiting for maximme
//  "satoshis" : 50000
//};

//var transaction = new bitcore.Transaction()
//    .from(utxo)
//    .addData(message) // Add OP_RETURN data
//    .sign(privateKey);
