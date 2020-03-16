const bitcoin = require('bitcoinjs-lib')
const wallet = require("./wallet.js");
const axios = require("axios");

console.log(process.env.network)
var network = ''
if (process.env.network == 'regtest')
  network = bitcoin.networks.regtest
else if (process.env.network == 'testnet')
  network = bitcoin.networks.testnet
else if (process.env.network == 'mainnet')
  network = bitcoin.networks.mainnet
//J56K3e6J
var message = "Hello"

const keyPairZed0 = bitcoin.ECPair.fromWIF(wallet.privateKey, network)
console.log(wallet.privateKey);
const p2wpkhZed0 = bitcoin.payments.p2wpkh({ pubkey: keyPairZed0.publicKey, network })

const txb = new bitcoin.TransactionBuilder(network)

var fs = require('fs');
var txid = fs.readFileSync('./bitcoin-0.19.0.1/bin/txid', 'utf8');
console.log(txid);

txb.addInput(txid, 0, null, p2wpkhZed0.output)

const data = Buffer.from(message, 'utf8')
const embed = bitcoin.payments.embed({ data: [data] })
txb.addOutput(embed.output, 0)
txb.addOutput(p2wpkhZed0.address, 99900000)

txb.sign(0, keyPairZed0, null, null, 1e8)
const txHex = txb.build().toHex();
console.log(wallet.privateKey);
axios.get('http://localhost:4444/api/signrawtransactionwithkey/' + txHex, {
  "params": {
    "key": wallet.privateKey
  }
}).then((res) => {
  axios.get('http://localhost:4444/api/sendrawtransaction/' + res.data.result.hex)
    .then((res) => {
      axios.get('http://localhost:4444/api/getrawtransaction/' + res.data.result)
        .then((res) => {
          console.log(res.data);
          axios.get('http://localhost:4444/api/decoderawtransaction/' + res.data.result)
            .then((res) => {
              console.log(res.data.result.vout[0].scriptPubKey.asm);
              var split = res.data.result.vout[0].scriptPubKey.asm.split(' ');
              console.log(Buffer.from(split[1], 'hex').toString());

            }).catch((e) => {
              console.log(e)
            });
        }).catch((e) => {
          console.log(e)
        });
    })
    .catch((e) => {
      console.log(e)
    });
}).catch((e) => {
  console.log(e)
});

