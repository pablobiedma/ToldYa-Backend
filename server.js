const express = require('express');
var bitcore = require('bitcore-lib') // Adding bitcore library

const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api', function(req, res){ console.log("==== TRANSACTION ====");
var field1 = req.query.field1;
var field2 = req.query.field2;
var field3 = req.query.field3;

console.log(field1);
console.log(field2);
console.log(field3);

var privateKey = new bitcore.PrivateKey(field2); //we add our private key here 
var utxo = {
  "txId" : "9fca330d7144c2ee45d0e31d6dc79910d33dccf6da6a8e4dae1573da82e77194",
  "outputIndex" : 0,
  "address" : field3,  //receiver address (public key)
  "script" : "76a9147adc5be0fe744e4bbe04d40723fb699bd00c9e3088ac",  
  "satoshis" : 50000
};

var transaction = new bitcore.Transaction()
    .from(utxo)
    .addData(field1) // Add OP_RETURN data
    .sign(privateKey);

console.log(transaction);
});//res.send('Hello World!'))

//add the router
app.use('/', router);
app.listen(process.env.port || 1337);

console.log('Running at Port 1337');