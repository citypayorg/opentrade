# OpenTrade is the best opensource cryptocurrency exchange!

Live version: https://trade.multicoins.org/


Step-by-step install instructions:

1. Register on the VPS hosting like this https://m.do.co/c/1ece5d76d5cd
2. Create "Droplet" Ubuntu 16 x64 / 1GB / 1vCPU / 25 GB SSD
3. Log in to Droplet over SSH (You will receive a email with IP, username and password)
4

```
[sudo] apt-get update
[sudo] apt-get install build-essential libssl-dev curl -y
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
bash install_nvm.sh
[sudo] reboot

nvm install 8.0.0

#git clone https://github.com/3s3s/opentrade.git  --> (orginal)
git clone https://github.com/citypayorg/opentrade  --> (copy)
cd opentrade

sudo npm install
sudo npm install -g forever
```

--------------------------------
err npm does not support Node.js v10.15.2
npm install npm@latest -g
--- if not work do this 
curl https://www.npmjs.com/install.sh | sudo sh

------------------------------------------------------------------------------------
원본에 필요한 fullchain.pem    privkey.pem
------------------------------------------------------------------------------------
openssl req -newkey rsa:2048 -new -nodes -keyout pri.pem -out fullchain.pem
openssl x509 -req -days 365 -in fullchain.pem -signkey pri.pem -out server.crt
------------------------------------------------------------------------------------
openssl req -newkey rsa:2048 -new -nodes -keyout pri2.pem -out privkey.pem
openssl x509 -req -days 365 -in privkey.pem -signkey pri2.pem -out server2.crt
------------------------------------------------------------------------------------

## Here is an example of the file ~/opentrade/server/modules/private_constants.js Edit with your configs.
```
'use strict';

exports.recaptcha_priv_key = 'YOUR_GOOGLE_RECAPTCHA_PRIVATE_KEY';
exports.password_private_suffix = 'LONG_RANDOM_STRING1';
exports.SSL_KEY = '../ssl_certificates/privkey.pem'; //change to your ssl certificates private key
exports.SSL_CERT = '../ssl_certificates/fullchain.pem'; //change to your ssl certificates fullchain

exports.walletspassphrase = {
    'MC' : 'LONG_RANDOM_STRING2',
    'BTC' : 'LONG_RANDOM_STRING3',
    'DOGE' : 'LONG_RANDOM_STRING4'
};
```

**After, you can run exchange**

```
--------------------------------
cd ~/opentrade/databaseServer
sudo forever start -l dataSvr.log --minUptime 5000 --spinSleepTime 2000 -a main.js
#sudo forever start main.js
--------------------------------
cd  ~/opentrade/server
sudo forever start -l webSvr.log --minUptime 5000 --spinSleepTime 2000 -a main.js
#sudo forever start main.js

--------------------------------
sudo forever list
--------------------------------
ps aux | grep main.js
sudo kill 3460
sudo kill 3540
--------------------------------
```

In your browser address bar, type https://127.0.0.1
You will see OpenTrade.

The first registered user will be exchange administrator. 

# Add trade pairs

For each coin you should create *.conf file
This is common example for "some_coin.conf"

```
rpcuser=long_random_string_one
rpcpassword=long_random_string_two
rpcport=12345
rpcclienttimeout=10
rpcallowip=127.0.0.1
server=1
daemon=1
upnp=0
rpcworkqueue=1000
enableaccounts=1
litemode=1
staking=0
addnode=1.2.3.4
addnode=5.6.7.8

```

Also, you must encrypt your cryptocurrency wallet with this command.

```
./bitcoind encryptwallet random_long_string_SAME_AS_IN_FILE_private_constants.js

```

*If coin is not supported by encryption (like ZerroCash and it forks) the coin can not be added to OpenTrade.*


Add you coin details to OpenTrade

1. Register on exchange. The first registered user will be exchange administrator.
2. Go to "Admin Area" -> "Coins" -> "Add coin"
3. Fill up all fields and click "Confirm"
4. Fill "Minimal confirmations count" and "Minimal balance" and uncheck and check "Coin visible" button
5. Click "Save"
6. Check RPC command for the coin. If it worked then coin was added to the exchange!

All visible coins should be appear in the Wallet. You should create default coin pairs now.

File ~/opentrade/server/constants.js have settings that you can change

https://github.com/3s3s/opentrade/blob/master/server/constants.js  --> original source
https://github.com/citypayorg/opentrade/blob/master/server/constants.js  --> fork source
```
exports.NOREPLY_EMAIL = 'no-reply@multicoins.org'; //change no-reply email
exports.SUPPORT_EMAIL = 'ivanivanovkzv@gmail.com'; //change to your valid email for support requests
const DOMAIN = 'localhost'; //Change to your domain name

exports.TRADE_MAIN_COIN = "Marycoin"; //change Marycoin to your main coin pair
exports.TRADE_DEFAULT_PAIR = "Litecoin"; //change Litecoin to your default coin pair
exports.share.TRADE_COMISSION = 0.001; //change trade comission percent
exports.share.DUST_VOLUME = 0.000001; //change minimal order volume

exports.recaptcha_pub_key = "6LeX5SQUAAAAAKTieM68Sz4MECO6kJXsSR7_sGP1"; //change to your recaptcha public key

```

File ~/opentrade/static_pages/chart.html

```
const PORT_SSL = 40443; //change to your ssl port
const MAIN_COIN = 'Marycoin'; //change Marycoin to your main coin pair same as in constants.js
const DEFAULT_PAIR = 'Litecoin'; //change Litecoin to your default coin pair same as in constants.js
      
const TRADE_COMISSION = 0.001;
```

After that, you coins should appear on the main page.



**Donate**
If you find this script is useful then consider donate please

Bitcoin bc1qsgadaxzd4dwjnpr35gga82k5ckyy6pxmkxr9kw

Marycoin M9dKNcBYgrbbE2f4tz3ud32KLKj1i9FrmN

Dogecoin DCJRhs9Pjr2FBrrUbKvFeWcYC6ZaF2GTAx

Litecoin LTbDdTijroJEyXt27apQSnuMY4RoXyjdq2

# License

OpenTrade is released under the terms of the MIT license. See LICENSE for more information or see https://opensource.org/licenses/MIT.





# ERR
----------------------------------------------------------------
-- forever 설치
npm install -g forever
forever 

forever start -l myapp.log --minUptime 5000 --spinSleepTime 2000 -a app.js
# sudo npm install forever -g

forever 설치 방법

forever 시작
# forever start main.js
# forever start -w main.js // -w란 watch의 약자이며, 소스코드의 변경이 감지되면 자동으로 node 서버를 재시작 해준다.

동작중인 forever 리스트 확인
# sudo forever list

forever 중지
# sudo forever stop 0

로그 확인하는 방법
forever logs를 이용해서 로그 파일 위치를 확인 가능하다.
그 후에 cat 파일명을 통해 로그 확인 가능 : cat /root/,forever.b1al,log
실시간 로그 확인 : tail -f /root/.forever/b1al.log
----------------------------------------------------------------
const hskey = fs.readFileSync('/etc/letsencrypt/live/coinsurvey.me/privkey.pem', 'utf8');


