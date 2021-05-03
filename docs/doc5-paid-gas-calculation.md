---
id: paid-gas-calculation
title: Paid Gas Calculation
---

As you may know `Giveth` pays all the gas money of withdrawing donations , so in this page we describe what moneys and how Gievth paid

For every withdraw there is two transaction
* When a user wants to move tokens to the home chain they will call the withdraw function
(The user use collect/disburse in giveth-dapp).
The tokens will then be burnt and an event is emitted. A node app will be watching for events
and relay to the homeChain, calling the authorizePayment function. Once the payment is approved,
the sender will be able to collect their funds from the GivethBridge contract.
For authorizing payments the `Giveth` would call transaction and pays the fee, you can see
a sample of authorize payment transaction [here](https://etherscan.io/tx/0x1617485ca189d3c3dd7ca699a59a74d4016ee6c1460c2005d0d44f884fced118).
and after calling this smart contract you can see status of payment in [Bridge Monitor](http://bridge.beta.giveth.io)



* In this step user can pay the gas and create transaction to transfer money
from Giveth bridge account to milestone's recipient account, or if user don't, Giveth would do that, for example you see in
[this transaction](https://etherscan.io/tx/0xd5986739567997c38289cd330799972ff022ee1544cd7932eed75d5fb338a146)
the Giveth created transaction and paid gas money (about `13.5$`), and there is three transaction in there,
so we conclude the Gievth paid about `4.5$` per payments, in our financial history we record that
we spent `4.5$` for the recipient of the milestone, and we can say the `4.5$` is spent for milestone
and the parent campaign of milestone, so it would save in the `gasPaidUsdValue` field,
and by the time if user withdraw moneys and we pay the gas money
`gasPaidUsdValue` of milestone, campaign and user would increase.

**How do we know the Giveth paid gas money or user (in PaymentExecuted smart contract) ?**:

If the transactions in etherscan is from Giveth's accounts(`0xDAa172456F5815256831aeE19C8A370a83522871`, `0x839395e20bbB182fa440d08F850E6c7A8f6F0780`)
we knew that the Giveth paid them, and if is different from this we assume that user paid gas money.