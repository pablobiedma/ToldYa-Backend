const express = require("express");
const router = express.Router();
var request = require("request");

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
      else if (!error){
        console.log("NOT OK")
        const data = JSON.parse(body);
        res.send(data);
      }
      else{
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
      else if (!error){
        console.log("NOT OK")
        const data = JSON.parse(body);
        console.log(data);
        res.send(data);
      }
      else{
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
        res.send(data);
      }
    };
    request(options, callback);
  });

  router.get("/getaddressinfo/:address", (req, res) => {
    console.log("/getaddressinfo/"+req.params.address);
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


  module.exports = router;

  //mqcCeUEvvqXADwiPcBsJaMyU2WZBW8fi6n