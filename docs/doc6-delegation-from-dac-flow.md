---
id: delegation-from-dac-flow
title: Delegation to DAC Flow
---
In this doc we will describe the flow from when money comes from home network to Giveth,
 until it goes to Milestone or Campaign

1. Some user that we call it **Donor** click on donating on dac
2. A `Pending` donation would be create in Feathers with this data
```
  status: 'Pending'
  mined: false,
  ownerType: 'giver',
  ownerTypeId: "donor's address who donated to dac",
  delegateType: 'dac',
  pledgeId: '0',
  delegateTypeId: 'dacId',
  amount: 'donatedAmount',
  amountRemaining: 'donatedAmount'
```
we call this donation `donated` donation in this document

3. The metamask would come up and **Donor** confirm the transaction to move money
   from the donor's wallet to Giveth bridge wallet in main net network
4. After bridging the donation, a `Transfer` event would come to Feathers after handling the event
   the donation's status should change to `Waiting` and the mined become `true`,
   and fill the `pledgeId` with DAC's pledgeId now the donation
   is ready to delegate
5. User (DAC owner for example) goes to project's(project can be `Milestone` or `Campaing`) page and
   delegate money (we call it `delegatedMoney` ) from `DAC` to a project 
   1. A donation like below  would be created(we call this donation `delegated` donation in this document):
   ```
    status: 'ToApprove',
    mined: false,
    parentDonations: [ 'thePreviousDonationId' ],
    amount: 'delegatedAmount',
    amountRemaining: 'delesgatedAmount',
    ownerTypeId: 'donor's address,
    pledgeId: '0',
    ownerType: 'giver',
    delegateId: 2,
    delegateTypeId: '??',
    intendedProjectTypeId: 'projectMongooseId',
    intendedProjectId: `projectId`,
    intendedProjectType: 'milestone or campaign'
   ```

   2. And for prevent  the double spending money from parentDonation a field as name `pendingAmountRemaining`
   would be add to parent donation:
   ```
    amountRemaining: 'amountRemaining'
    pendingAmountRemaining: 'amountRemaining - delegatedMoney'
   ```

6. Then after mining this transaction a `Transfer` event would come to Feathers and the `ToApprove` donation's
   `mined` become `true`, `pldgeId` would fill with project's pledgeId
   for the parent donation the `amountRemaining`  would replace with 
   `pendingAmountRemaining` and after that `pendingAmountRemaining` would be unset

7. In this step `donor` can go to `/donations`, `Donor` will see two buttons name `Commit` and `Reject`,
  if click on `Commit`
   
   1. for prevent the double spending, the `delegated` donation would be updated with 
  
  ```
     pendingAmountRemaining: '0'
  ```
   2. A donation would be created( we call this `final` donation in this document):
   ```
    { 
     status: 'Committed',
     mined: false,
     parentDonations: [ 'delegatedDonationId' ],
     isReturn: false,
     lessThanCutoff: false,
     pledgeId: '0',
     amount: 'delegatedMoney',
     amountRemaining: 'delegatedMoney',
     ownerTypeId: 'projectMongoId',
     ownerType: 'projectType (milestone || campaign)',
     giverAddress: Donor's address,
   ```

8. After donor sign previous transaction, and it mined a `Transfer` event comes to Feathers,
when handling the event these updates will happen:
   1. `delegated` donation's `amountRemaining` will be replaced with it's `pendingamountRemaining`(we know it's zero)
   so then the `lessThanCuttoff` for this donation would become `true`
     
   2. the `final` donation's `mined` field become `true`, and `pledgeId` will fill with project's pledgeId,
      now and it's ready for collect
   
9. if in step `7` Donor clicks on `Reject` button
   1. The `donated` donation's status become `Rejected` and add `pendingAmountRemaining: 0` for that
   2. A  donation will be created with this data ( we call this `returned` donation in this document):
   ```
   {
    status: 'ToApprove',
    mined: false,
    parentDonations: [ 'delegated DonationId' ],
    isReturn: true,// it's important, in this flow this the first donation with isReturn:true
    lessThanCutoff: false,
    amount: 'delegatedAmount',
    amountRemaining: 'delegatedAmount',
    ownerType: 'giver',
    giverAddress: "donor's address",
    pledgeId: '0'
   }
    ```

   
10. After sign and mine previous transaction, a `Transfer` event comes to Feathers, with handling this event
    1. The `amountRemaining` of`delegated` donation will be replaced by `pendingAmountRemaining` ( we know it's zero)
    2. The `mined` field in `returned` donation becomes `true` and the `pledgeId` would fill with DAC's `pledgeId` 
       and the donation becomes `Waiting` now it's a ready donation for `DAC` that you can delegate it again

//TODO in this scenario we should fill the `Refund` scenario later

