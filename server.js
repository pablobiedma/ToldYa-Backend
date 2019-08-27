const express = require('express');
const bitcore = require('bitcore-lib') // Adding bitcore library

const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 1337);

console.log('Running at Port 1337');