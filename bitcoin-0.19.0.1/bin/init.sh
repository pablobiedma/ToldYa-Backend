 #!/bin/bash

./bitcoin-cli generatetoaddress 101 $(./bitcoin-cli getnewaddress)
./bitcoin-cli sendtoaddress "$1" 1 > txid
