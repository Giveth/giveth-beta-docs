---
id: paid-gas-calculation
title: Paid Gas Calculation
---

`Giveth` pays for almost all the gas consumed to process payments in `Mainnet` network. It also provides reports on the amount of gas that has been paid for every user, trace and campaign in terms of the amount of consumed `Ether` and the price in `USD`. Below describes how these values are measured.

For every withdrawal, two `Mainnet` transactions are needed in order to move money to the user's wallet:

1. When a user collects/disburses funds from a trace, the `withdraw` method is called on the trace smart contract in a foreign network (not `Mainnet`).By that action, tokens are burnt in the foreign network and related events are emitted. A node app (`Bridge`), that is watching for these events, relays the payment to home network (`Mainnet`), by calling the `authorizePayment` method on the `GivethBridge` smart contract with corresponding data. After that transaction is mined, the payment item(s) appear in  [Bridge Monitor](http://bridge.beta.giveth.io). The `authorizePayment` transactions can be created only by an authorized key held by `Bridge`, and every instance of gas paid on these transactions is added to gas paid balance in the corresponding `Recipient Address`, `Trace` and `Campaign`. You can see a sample of the `authorizePayment` transaction [here](https://etherscan.io/tx/0x1617485ca189d3c3dd7ca699a59a74d4016ee6c1460c2005d0d44f884fced118).
   

2. Once the payment is approved, the receivers are able to collect their funds from the `GivethBridge` contract. In this step anyone is able to make the `disburseAuthorizedPayments` call to the GivethBridge smart contract and pay the gas to transfer money from Giveth bridge account to trace's recipient wallet. If this is not done by an individual, the call is made by`Giveth` after aggregating multiple payments into one transaction. An example can be found in [this transaction](https://etherscan.io/tx/0x210ce079b215444ccf3a93e93cfe12eccbab7389ff3e82909b50e5e9cf0481a1) created by `Giveth` where you can see the total gas paid (about `$113`). Here there are seven payments aggregated (6 in DAI and one in ETH), so we conclude the Giveth paid about `$16` per payment at this step. In the gas paid history, `$16` is added per corresponding recipient, trace and campaign, and is saved in the `gasPaidUsdValue` field. In this case, one of the recipients (0x00d18ca9782bE1CaEF611017c2Fbc1a39779A57C) received two payments (0.02 ETH and 350 DAI) so their gas paid charge is added twice.

**How do we know if Giveth has paid gas for PaymentExecuted?**

All the `authorizedPayment` transactions are made by Giveth and beneficiary recipient, trace and campaign are charged.

The logic is different for `disburseAuthorizedPayments` transactions. If the transaction sender is one of Giveth's accounts(`0xDAa172456F5815256831aeE19C8A370a83522871`, `0x839395e20bbB182fa440d08F850E6c7A8f6F0780`)
we know that Giveth has paid the gas. Otherwise, we assume that the user has paid it.

**How  is the USD value paid gas determined?**

The USD value of paid gas is the product of `Ether amount paid as gas` and `Ethereum price at the transaction timestamp`.

