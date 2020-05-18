const bitcoin = require('bitcoinjs-lib')
const wallet = require("../wallet.js");
const express = require("express");
const router = express.Router();
var request = require("request");
const axios = require("axios");
var fs = require('fs');
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/addresses.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

router.get("/getblockcount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getconnectioncount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getdifficulty", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockchaininfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getmininginfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getpeerinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getrawmempool", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
    }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash",
                                                      "params":[
                                                        ${req.params.index},
                                                        "true"
                                                      ]
                                                    }`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
    }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});



router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
    }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  console.log("Get://decoderawtransaction/:hex");

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/signrawtransactionwithkey/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"signrawtransactionwithkey","params":
    [
        "${req.params.hex}",
        [\"${req.query.key}\"]
    ]}`;
  console.log(dataString);
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log("200 OK")
      const data = JSON.parse(body);
      res.send(data);
    }
    else if (!error) {
      console.log("NOT OK")
      const data = JSON.parse(body);
      res.send(data);
    }
    else {
      console.log("Unspecified Errror")
      res.send(error);
    }
  };
  request(options, callback);
});

router.get("/sendrawtransaction/:hex", (req, res) => {

  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":
    [
        "${req.params.hex}"
    ]}`;
  console.log(dataString);
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log("200 OK")
      const data = JSON.parse(body);
      res.send(data);
    }
    else if (!error) {
      console.log("NOT OK")
      const data = JSON.parse(body);
      console.log(data);
      res.send(data);
    }
    else {
      console.log("ERROR")
      res.send(error);
    }
  };
  request(options, callback);
});



router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
    }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
    }]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getaddressinfo/:address", (req, res) => {
  console.log("/getaddressinfo/" + req.params.address);
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getaddressinfo","params":["${req.params.address}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };
  console.log(dataString);
  callback = (error, response, body) => {
    if (error) {
      console.log(error);
      res.send(error);
    }
    else if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
    else {
      res.send(response.statusCode);
    }


  };
  request(options, callback);
});

router.get("/getrawtransaction/:txid", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction",
                                                    "params":["${req.params.txid}"],
                                                    1
                                                }`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/decoderawtransaction/:hexstring", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${req.params.hexstring}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

// //send BTC to address
router.get("/sendtoaddress/:address/:amount", (req, res) => {

  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendtoaddress","params":["${req.params.address}",${req.params.amount}]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else {
      res.status(500).send(error);
    }
  };
  request(options, callback);
});

// //send Amount Received by address
router.get("/getreceivedbyaddress/:address", (req, res) => {

  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["${req.params.address}",0]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

//Get Transaction
router.get("/gettransaction/:txid", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"gettransaction","params":["${req.params.txid}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

// Get new address
router.get("/getnewaddress/", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":["","legacy"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      // res.send(data);
      // console.log("key");
      // console.log(data);

      var dataString1 = `{"jsonrpc":"1.0","id":"curltext","method":"dumpprivkey","params":["${data.result}"]}`;
      var options1 = {
        url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
        method: "POST",
        headers: headers,
        body: dataString1
      };

      callback1 = (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const data1 = JSON.parse(body);
          // console.log(data1.result);
          // res.send(data);
          fs.writeFile('privateKey.txt', data1.result, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
          res.send(data);
          let sql = `INSERT INTO addressTable (address, privKey) VALUES (?, ?)`;
          console.log(data);
          console.log(data1);
          db.run(sql, [data.result, data1.result], function (err) {
            if (err) {
              return console.log(err.message);
            }
            console.log("An address with its private key added to db");
          })
        }
        else {
          console.log("Error");
          console.log(error);
        }
      };
      request(options1, callback1);
    }
    else {
      res.status(500).send(error);
    }
  };
  request(options, callback);
});


//estimate fee - hardcoded for 6 blocks
router.get("/estimatesmartfee", (req, res) => {
  // console.log("i reached here");
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"estimatesmartfee","params":["6"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


//Send Money to fixed account
router.get("/sendtofixedaddress/:txid/:msg", (req, resp) => {

  var txid = req.params.txid;
  var message = req.params.msg;

  var network = ''
  if (process.env.network == 'regtest')
    network = bitcoin.networks.regtest
  else if (process.env.network == 'testnet')
    network = bitcoin.networks.testnet
  else if (process.env.network == 'mainnet')
    network = bitcoin.networks.mainnet


  axios.get(`http://localhost:4444/api/gettransaction/${txid}`)
    .then((res) => {
      let getaddress = res.data.result.details.find(i => {
        if (i.category === "receive") {
          return i;
        }

      });
      console.log(res.data.result.details);
      console.log(getaddress.address);

      let sql = `SELECT address, privKey FROM addressTable WHERE address = ?`;
      let address;
      let privKey;
      // first row only
      db.get(sql, [getaddress.address], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        if (!row)
          return console.log(`No address found with the id ${getaddress.address}`)

        address = row.address;
        privKey = row.privKey;
        console.log(address);
        console.log(privKey);


        //J56K3e6J
        if (process.env.network == 'mainnet') {
          axios.get('http://localhost:4444/api/estimatesmartfee')
            .then((res) => {

              var fee = (((1 * 180) + (2 * 34) + 2) / 1000) * res.data.feerate;

              const keyPairZed0 = bitcoin.ECPair.fromWIF(privKey, network)
              const p2wpkhZed0 = bitcoin.payments.p2pkh({ pubkey: keyPairZed0.publicKey, network })

              const txb = new bitcoin.TransactionBuilder(network)
              txb.addInput(txid, 0, null, p2wpkhZed0.output)

              var fixedAddress = fs.readFileSync('./fixedAddress', 'utf8');

              // 2N9XeSZwrYpjTnynHspZWRhNhQ736esXdkn
              const data = Buffer.from(message, 'utf8')
              const embed = bitcoin.payments.embed({ data: [data] })
              txb.addOutput(embed.output, 0)
              txb.addOutput(fixedAddress, ((getaddress.amount * 100000000) - fee))
              txb.sign(0, keyPairZed0, null, null, 1e8)
              const txHex = txb.build().toHex();
              var value;


              axios.get('http://localhost:4444/api/signrawtransactionwithkey/' + txHex, {
                "params": {
                  "key": privKey
                }
              }).then((res) => {
                axios.get('http://localhost:4444/api/sendrawtransaction/' + res.data.result.hex)
                  .then((res) => {
                    axios.get('http://localhost:4444/api/getrawtransaction/' + res.data.result)
                      .then((res) => {
                        console.log(res.data);
                        axios.get('http://localhost:4444/api/decoderawtransaction/' + res.data.result)
                          .then((res) => {
                            console.log(res.data);
                            console.log(res.data.result.vout[0].scriptPubKey.asm);
                            var split = res.data.result.vout[0].scriptPubKey.asm.split(' ');
                            console.log(Buffer.from(split[1], 'hex').toString());
                            value = res.data.result.txid;
                            resp.send(value);

                          }).catch((e) => {
                            console.log("Decode Raw Transaction");
                            console.log(e)
                          });
                      }).catch((e) => {
                        console.log("Get Raw Transaction");
                        console.log(e)
                      });
                  })
                  .catch((e) => {
                    console.log("Send Raw Transaction");
                    console.log(e)
                  });
              }).catch((e) => {
                console.log("Sign Raw Transaction");
                console.log(e)
              });

            })
            .catch((e) => {
              console.log("Estimate Smart Fee");
              console.log(e)
            });
        } else {

          var fee = 99900000;

          const keyPairZed0 = bitcoin.ECPair.fromWIF(privKey, network)
          const p2wpkhZed0 = bitcoin.payments.p2pkh({ pubkey: keyPairZed0.publicKey, network })

          const txb = new bitcoin.TransactionBuilder(network)
          txb.addInput(txid, 0, null, p2wpkhZed0.output)

          var fixedAddress = fs.readFileSync('./fixedAddress', 'utf8');

          // 2N9XeSZwrYpjTnynHspZWRhNhQ736esXdkn
          const data = Buffer.from(message, 'utf8')
          const embed = bitcoin.payments.embed({ data: [data] })
          txb.addOutput(embed.output, 0)
          txb.addOutput(fixedAddress, fee)
          txb.sign(0, keyPairZed0, null, null, 1e8)
          const txHex = txb.build().toHex();
          var value;


          axios.get('http://localhost:4444/api/signrawtransactionwithkey/' + txHex, {
            "params": {
              "key": privKey
            }
          }).then((res) => {
            axios.get('http://localhost:4444/api/sendrawtransaction/' + res.data.result.hex)
              .then((res) => {
                axios.get('http://localhost:4444/api/getrawtransaction/' + res.data.result)
                  .then((res) => {
                    console.log(res.data);
                    axios.get('http://localhost:4444/api/decoderawtransaction/' + res.data.result)
                      .then((res) => {
                        console.log(res.data);
                        console.log(res.data.result.vout[0].scriptPubKey.asm);
                        var split = res.data.result.vout[0].scriptPubKey.asm.split(' ');
                        console.log(Buffer.from(split[1], 'hex').toString());
                        value = res.data.result.txid;
                        resp.send(value);

                      }).catch((e) => {
                        console.log("Decode Raw Transaction");
                        console.log(e)
                      });
                  }).catch((e) => {
                    console.log("Get Raw Transaction");
                    console.log(e)
                  });
              })
              .catch((e) => {
                console.log("Send Raw Transaction");
                console.log(e)
              });
          }).catch((e) => {
            console.log("Sign Raw Transaction");
            console.log(e)
          });

        }

      });
    }).catch((e) => {
      console.log("Get Transaction");
      console.log(e)
    });

});


module.exports = router;

  //mqcCeUEvvqXADwiPcBsJaMyU2WZBW8fi6n