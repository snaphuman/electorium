# Welcome to Electorium: The trustworthy voting system for student elections.

This is an Aeternity Dapp thas uses the power of Phoenix Framework and VueJS.

## Pre-requsites

* First install Elixir 1.5 and Erlang 18 or later. [See docs](https://hexdocs.pm/phoenix/installation.html)
* Install node.js >= 5.0.0
* Install and enable PostgreSql
* Install and enable Docker

## ¿How to use it?

* TODO:

### Deploy the App

* TODO: Mix dependencies
* TODO: Run migrations
* TODO: Run server


### Initialize the Aeternity node infraestructure ( Developers only )

* Start docker service
```
$ sudo systemctl start docker

```

* Install ForgAE Globally
```
$ npm install -g forgae
```

* Start Aeternity Node
```
$ cd ./apps/electorium_web/assets
$ npm install
$ forgae node
```

* Save owner (Miner) keypairs. Yow will use it later for wallet configuration

```
Miner ------------------------------------------------------------
public key: ak_2mwRmUeYmfuW93ti9HMSUJzCk1EYcQEfikVSzgo6k2VghsWhgU
private key: bb9f0b01c8c9553cfbaf7ef81a50f977b1326801ebf7294d1c2cbccdedf27476e9bbf604e611b5460a3b3999e9771b6f60417d73ce7c5519e12f7e127a1225ca
Wallet's balance is 197000000000000000000 
```

### Manage Sophia Smart Contract

* Compile contract
```
$ forgae compile
```

* Deploy to testnet
```
$ forgae deploy -n tesnet
```

* Verify the deployed contract
```
$ forgae history

┌───────────────┬──────────────────────────────────────────────────────┐
│ Event Time    │ 17 Jul, 00:04:31                                     │
├───────────────┼──────────────────────────────────────────────────────┤
│ Executor      │ Deployer                                             │
├───────────────┼──────────────────────────────────────────────────────┤
│ Name or Label │ Electorium                                           │
├───────────────┼──────────────────────────────────────────────────────┤
│ Tx Hash       │ th_JPQ16Wh6UWEgbxCuE1wq5PuMFcUhr5n1xyndHuXJiM7awiXSz │
├───────────────┼──────────────────────────────────────────────────────┤
│ Status        │ Success                                              │
├───────────────┼──────────────────────────────────────────────────────┤
│ Gas Price     │ 1000000000                                           │
├───────────────┼──────────────────────────────────────────────────────┤
│ Gas Used      │ 2899                                                 │
├───────────────┼──────────────────────────────────────────────────────┤
│ Result        │ ct_KXuGX4wVCEp8cjgS1hZNGgPUuyMj6xbDobMDvVBh3J4VmC9oK │
└───────────────┴──────────────────────────────────────────────────────┘
```

Copy the transaction hash and go to https://testnet.explorer.aepps.com

Paste it in the input search and verify the information.

* Stop Node
```
forgae node --stop
```

### Configure the School Wallet

Open the `setting.js` file located in `src` directory and change the values: contractAddress, account.pub and account.priv 

By default this config is pointing to the testnet endpoint, so you dont ned to have the local node running (this will save your machine resources).

