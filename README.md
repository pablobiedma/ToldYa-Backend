# Toldya
The binary files will not have execute permission set as you download this repo

So just set it on all binaries in the bin folder

to do so cd into 
~/BTC_OP_RETURN-master/bitcoin-0.19.0.1/bin$ 
and run: 
chmod +x -R .
Please not the "." at the end of the command




how to run: 

Backend:

Open terminal and run:

If running project first time also run:
npm i


npm run env

How to run:
npm run startRegtest 

(if it gives error "npm run stop" and retry)

In another window
npm run initRegtest


Frontend:

If running project first time also run:
npm i


How to run:
npm start

//////////////////////////////////////////////////


1. Generate Address 
2. Send BTC to this address (For testnet can be done using postman)
3. Enter that tansactionId along the Msg and submit
4. It will do the transaction to the fixed address and return the transaction Id

//////////////////////////////////////////////////

How to use postman: 

Sending BTC to the address:
URL:
http://localhost:4444/api/sendtoaddress/{btc address}/1
Example:
http://localhost:4444/api/sendtoaddress/mh9HJw9RnJq9oXVmqwGfKWLaLzB3hr7Qbg/1

Getting Transaction (If want to see transaction):
URL:
http://localhost:4444/api/gettransaction/{Transaction Id}
Example:
http://localhost:4444/api/gettransaction/6eec31940df28b3244f973770477f6a9367bc96b1f38b5ad960232a25ef5fde6


Cheers,
Pablo.
