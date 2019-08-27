var bitcore = require("bitcore-lib") // Adding bitcore library

	// We can generate an address at  bitaddress.org
		
var privateKey = new bitcore.PrivateKey(''); //we add our private key here 
var utxo = {
  "txId" : "",
  "outputIndex" : 0,
  "address" : "",  //receiver address (public key)
  "script" : "",  
  "satoshis" : 50000
};

var transaction = new bitcore.Transaction()
    .from(utxo)
    .addData('told ya') // Add OP_RETURN data
    .sign(privateKey);