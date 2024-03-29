---
id: giveth-1-simulation
title: Giveth 1 Simulation
---

[This project](https://github.com/Giveth/giveth-1-simulation) runs to fix conflicts between the [Giveth-Feathers](https://github.com/Giveth/feathers-giveth) DB and network ( smart contracts)
and it runs twice a day in develop server with this crontab job

`0  */12 * * *   cd /home/deploy/giveth-1-simulation && NODE_ENV=develop /home/deploy/.nvm/versions/node/v10.23.0/bin/node /home/deploy/giveth-1-simulation/src/index.js >> /home/deploy/giveth-1-simulation/data/log/simulation-cron.log`

## Table of content

- [Table of content](#table-of-content)
- [Getting Started](#getting-started)
    - [Install](#install)
    - [Run Script](#run-script)
- [What do this project](#what-do-this-project)


## Getting Started

### Install

- #### Any OS
    1. Click **Star** on this repo near the top-right corner of this web page (if you want to).
    2. Fork this repo by clicking **Fork** button in top-right corner of this web page. Continue to follow instruction steps from your own **giveth-1-simulation** repo.
    3. The rest of these steps must be done from your machine's command line. Clone your own **giveth-1-simulation** repo. Copy the link from the "Clone or download" button near the top right of this repo's home page.
        ```
        git clone {paste your own repo link here}
        ```
    4. Change directories to `giveth-1-simulation`:
        ```
        cd giveth-1-simulation
        ```
    5. Make sure you have [NodeJS](https://nodejs.org/) (v10.23.0 or higher), [yarn](https://www.yarnpkg.com/) (v0.27.5 or higher), and npm (5.4.1 or higher) installed.
    6. Install dependencies from within feathers-giveth directory:
        ```
        npm install
        ```

### Run Script

1. create a folder named config, and put `develop.json` in that
   with these data

```
{
  "mongodb": "mongodb://localhost:27017/giveth-develop",
  "givethFeathersUrl": "https://feathers.develop.giveth.io",
  "logDir": "data/log",
  "cacheDir": "data/cache",
  "logLevel": "info",
  "dryRun": false,
  "updateNetworkCache": true,
  "emailReport": false,
  "emailSimulationError": false,
  "givethDevMailList": [
    "mranjbar.z2993@gmail.com"
  ],
  "dappMailerUrl": "Giveth dapp mailer url",
  "dappMailerSecret": "SECRET NOT IN DEFAULT.JSON",
  "blockchain": {
    "requiredConfirmations": 6,
    "nodeUrl": "wss://rinkeby.eth.aragon.network/ws",
    "homeNodeUrl": "wss://ropsten.infura.io/ws/v3/{SECRET GET THIS FROM infura.io}",
    "liquidPledgingAddress": "0xf0e0F5A752f69Ee6dCfEed138520f6821357dc32"
  },
  "tokenWhitelist": [
    {
      "name": "Ropsten ETH",
      "address": "0x0",
      "foreignAddress": "0x387871cf72c8CC81E3a945402b0E3A2A6C0Ed38a",
      "symbol": "ETH",
      "decimals": 6
    },
    { "name": "MiniMe Test Token",
      "address": "0xE690E380740a682E2b8CEAEa33584Ea2cb59849E",
      "foreignAddress": "0xe1DA0672bDBdBc469E82cCACCe9e4c7C79dAF6cf",
      "symbol": "XDAI",
      "decimals": 3,
      "rateEqSymbol": "DAI"
    }
  ]

}
```

2. `npm run build` This transpile the project and generate an `index.js`
3. `npm run start:develop`

### What do this project
* Getting all events from network (and cache it to in next runs
  just get new ones)
* Getting all states from network (and cache it to in next runs
  just get new ones)
* **Sync Communities**: If there is any community in network and for any reason
  it's not in feathers-giveth, it create these Communities
* **Sync Campaigns**:  If there is any campaign in network and for any reason
  it's not in feathers-giveth, it create these Campaigns
* **Sync Traces**: If there is any trace in network and for any reason
  it's not in feathers-giveth, it create these Traces
* **Sync donations with network**: if there is missing donations in DB
  or for any reason the donations stuck in `Pending` status
  it fixed it
*  **Update donationsCounter**: If there is any conflict in `Trace` or `Campaign` or
   `Community` donationsCounter and it's not up to date, this script resolve that
* **Update trace statuses**: if the status of any trace is not up to date and not synced with network,
  the script will resolve that and update the trace
* **Unset pendingAmountRemaining from committed donations**

