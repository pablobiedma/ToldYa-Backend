# BTC_OP_RETURN
Send BTC OP_RETURN transactions to regtest, testnet and mainnet
Install the files
npm i

npm run env

How to run:
npm run startRegtest 

(if it gives error "npm run stop" and retry)

In another window
npm run initRegtest

Open the file btc.js 
Replace "Zed Rocks!" on line 14 with message of your choice. Don't forget the "" 

Save the file
now issue the command

network=regtest node btc.js

The code should now sign a transaction and send it to the network
It also fetches the transaction from the network and decodes the Hex string in OP_RETURN and displays it to the screen.

If you need to send another transaction.

npm run stop

npm run bitcoindRegtest

npm run initRegtest

put your message

network=regtest node btc.js

You can also run the code on the testnet and mainnet for testnet
if you have run the code before 

npm run stop

Heads up: It would take a some GBs of space.

npm run bitcoindTestnet

npm run startRegtest

Now you should wait for sometime for the node to sync up.
Once in sync get a Testnet address
Fund it with TestCoin from a testnet Faucet get the TransactionID and put it in bitcoin-0.19.0.1/bin/txid put the privatekey and the address in wallet.js.

Kindly observe and maintain the formatting

Donot miss the "quotes" or skip the ,

now run

network=testnet node btc.js

It should now sign and send the transaction from the privateKey you provided and send to the network
You may check this transaction on a Blockexplorer of your choice.
