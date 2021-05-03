---
id: paid-gas-calculation
title: Paid Gas Calculation
---

`Giveth` pays almost all the gas consumed on payment process in `Mainnet` network. Also, it provides reports on how much gas has been paid on every user, milestone and campaign in terms of amount of consumed `Ether` and price in `USD`. Below describes how these values are measured.

For every withdraw two `Mainnet` transactions are needed in order to move money to user wallet

1. When a user collects/disburses milestone money in a milestone, the `withdraw` method is called on milestone smart contract in foreign network (not `Mainnet`).By that action tokens will be burnt in the foreign network, and related events are emitted. A node app (`Bridge`) watching for that kind of events and relays the payment to home network (`Mainnet`), by calling the `authorizePayment` method on `GivethBridge` smart contract with corresponding data. After that transaction is mined, the payment item(s) will be appeared in  [Bridge Monitor](http://bridge.beta.giveth.io). The `authorizePayment` transactions can be created only by authorized key held by `Bridge` and every gas paid on these transactions are added to gas paid balance of corresponding `Recipient Address`, `Milestone` and `Campaign`. You can see a sample of `authorizePayment` transaction [here](https://etherscan.io/tx/0x1617485ca189d3c3dd7ca699a59a74d4016ee6c1460c2005d0d44f884fced118).
   

2. Once the payment is approved, the receivers will be able to collect their funds from the `GivethBridge` contract. In this step anyone will be able to make the `disburseAuthorizedPayments` call to GivethBridge smart contract and pay the gas to transfer money from Giveth bridge account to milestone's recipient wallet. If no one does that, `Giveth` would do it periodically and may aggregate multiple payments in one transaction, like [this transaction](https://etherscan.io/tx/0x210ce079b215444ccf3a93e93cfe12eccbab7389ff3e82909b50e5e9cf0481a1) that `Giveth` had created and paid the gas (about `113$`). there are seven payments aggregated (6 in DAI token and one in ETH), so we conclude the Giveth paid about `16$` per payment at this step. In gas paid history `16$` is added per corresponding recipients, milestones and campaigns is saved in the `gasPaidUsdValue` field. In this case one of recipients (0x00d18ca9782bE1CaEF611017c2Fbc1a39779A57C) has received two payments (0.02 ETH and 350 DAI) and is charged double.

**How do we know the Giveth paid gas for PaymentExecuted?**

All the `authorizedPayment` transactions are made by Giveth and beneficiary recipient, milestone and campaign are charged.

The logic is different for `disburseAuthorizedPayments` transactions. if the transaction sender is one of Giveth's accounts(`0xDAa172456F5815256831aeE19C8A370a83522871`, `0x839395e20bbB182fa440d08F850E6c7A8f6F0780`)
we consider Giveth has paid the gas, otherwise we assume that user has paid it.

**How USD value of paid gas is determined?**

The USD value of paid gas is the multiple of `Ether amount paid as gas` in `Ethereum price at the transaction timestamp`

