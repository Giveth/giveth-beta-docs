---
id: delegation-from-dac-flow
title: Delegation to DAC Flow
---
Below steps describes the money flow since it comes from home network to Giveth, until it goes to a Milestone or
Campaign:

1. The User (call it **Donor**) clicks on `Donate` button in some Community view and donates to the Community.
   

2. The MetaMask will show up and **Donor** confirm the transaction to move money from the donor's wallet to Giveth
   bridge smart contract in Mainnet network
   

3. A new `Pending` donation (a donation with `Pending` status) record would be created in Feathers including this data
   
   ```json
   status: 'Pending'
   mined: false,
   ownerType: 'giver',
   ownerTypeId: <donor's address who donated to dac>,
   delegateType: 'community',
   pledgeId: '0',
   delegateTypeId: <community Id>,
   amount: <donated amount>,
   amountRemaining: <donated amount>'
    ```
   we call this donation `donated` donation in this document


4. `Bridge Server` will transfer money between networks, and some amount of tokens with equal value is minted for
   Community. Then, a `Transfer` event will be emitted and Rinkeby money is moved to a pledge (like bank account)
   whose owner is the Community received the donation.
   ---
   Feathers server processes the event and after the `donated` donation will be patched with this data:

   ```json
   status: 'Waiting',
   mined: true,
   pledgeId: <id of pledge money moved to> 
    ```
   Now the money is ready to be delegated from the Community.
   

5. The Community owner goes to some project's (project can be either a `Trace` or  a `Campaing`) page and delegates money (we
   call it `delegatedMoney`) from `DAC` to the project.
   
   1. A new donation object like below would be created (we call this `delegated` donation in this document):
   ```json
   status: 'ToApprove',
   mined: false,
   parentDonations: [ <the donated donation object id in mongo> ],
   amount: <delegated amount>,
   amountRemaining: <delesated amount>,
   ownerTypeId: <donor address>,
   pledgeId: '0',
   ownerType: 'giver',
   delegateId: <Community ID in smart contract projects>,
   delegateTypeId: <Community object ID in mongo>,
   intendedProjectTypeId: <Project object ID in mongo>,
   intendedProjectId: <Project ID in smart contract>,
   intendedProjectType: <trace or campaign>
   ```

   2. To prevent double spending money from the parent donation (`donated` donation ) a field `pendingAmountRemaining`
      would be added to parent donation:
   ```json
   amountRemaining: <new amountRemaining>
   pendingAmountRemaining: <amountRemaining - delegatedMoney>
   ```

6. Then after the transaction is mined, again a `Transfer` event would come to Feathers and the `ToApprove` donation's
   `mined` become `true`, `pldgeId` would fill with project's pledgeId for the parent donation, the `amountRemaining`
   would replace with `pendingAmountRemaining`, and after that `pendingAmountRemaining` will be unset.


7. In this step on `/donations` path, the `Donor` will see two buttons name `Commit` and `Reject` behind the `delegated` 
   donation item, if he/she clicks on `Commit` and sign the transaction:
   
   1. for prevent the double spending, the `delegated` donation would be updated with 
   ```json
   pendingAmountRemaining: '0'
   ```
   2. A new donation will be created (we call this `final` donation in this document) including below data:
   ```json
   status: 'Committed',
   mined: false,
   parentDonations: [ <the delegated donation object id in mongo> ],
   isReturn: false,
   lessThanCutoff: false,
   pledgeId: '0',
   amount: <delegated amount>,
   amountRemaining: <delegated amount>,
   ownerTypeId: <Project ID in mongo>,
   ownerType: <trace or campaign>,
   giverAddress: <Donor address>,
   ```
  <br> 

8. After the transaction is mined a `Transfer` event comes to the Feathers server. Processing that events results in:

   1.  a `delegated` donation's `amountRemaining` will be replaced with its `pendingamountRemaining`(was zero)
      so then the `lessThanCuttoff` for this donation will be changed to `true`

   2. the `final` donation's `mined` field will become `true`, and `pledgeId` will fill with project's pledgeId. The
      money is ready for collect now.
      

9. if in step `7` Donor clicks on `Reject` button and sign the transaction
   1. The `donated` donation's status will become `Rejected` and add `pendingAmountRemaining: 0`
      
   2. A new donation will be created with including data (we call this `returned` donation in this document):
   ```json
    status: 'ToApprove',
    mined: false,
   parentDonations: [ <the delegated donation object id in mongo> ],
    isReturn: true,// it's important, in this flow this the first donation with isReturn:true
    lessThanCutoff: false,
    amount: <delegated amount>,
    amountRemaining: <delegated amount>,
    ownerType: 'giver',
    giverAddress: <Donor address>,
    pledgeId: '0'
    ```


10. After the transaction is mined, a `Transfer` event comes to Feathers server. The outcome of processing that event
   will be:
      1. The `amountRemaining` of`delegated` donation will be replaced by `pendingAmountRemaining` (zero)
      2. The `mined` field in `returned` donation becomes `true` and the `pledgeId` would fill with new donation 
         `pledgeId`. The donation becomes `Waiting` now it's a ready donation for `Donor` to delegate it again

