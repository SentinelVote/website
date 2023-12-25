---
sidebar_position: 2
---

# Central Authority

## User Manual for Central Authority

<details>
<summary>

### Registration/Setup Phase Actions

</summary>

**1. Login as Admin**

Enter the admin’s credentials to login:
![Admin Login](../../../static/img/user-manual/Admin/1_login.png)

**2. Home Page**

The home page shows the list of users and their status. On the bottom left, a purple button “Fold Keys” should be clicked once all voters have generated their public key or the cutoff time for the voters to do so has passed:
![Home Incomplete](../../../static/img/user-manual/Admin/2_home_incomplete.png)

When all voters have generated their public key, the admin is ready to click “Fold Keys.” Before that, compare the number of blockchain transactions:
![Home Complete](../../../static/img/user-manual/Admin/3_home_complete.png)

**3. Hyperledger Explorer**

Enter the admin’s credentials to login:
![Fabric Login](../../../static/img/user-manual/Admin/4_fabric_login.png)

**4. Explorer Dashboard**

The dashboard displays information on the blockchain network:
![Fabric Home](../../../static/img/user-manual/Admin/5_fabric_home.png)

**5. Explorer Transactions**

Note the total transactions, which is originally 6:
![Fabric Transactions](../../../static/img/user-manual/Admin/6_fabric_transactions.png)

**6. Home Page - Fold Keys**

Click on “Fold Keys.” This process is irreversible:
![Home Clicked Fold](../../../static/img/user-manual/Admin/8_home_clicked_fold.png)

**7. Explorer Transactions - Fold Keys**

Note the total transactions, which is now 7:
![Fabric Transactions Keys](../../../static/img/user-manual/Admin/9_fabric_transactions_keys.png)

**8. Explorer Single Transaction - Fold Keys**

Open and read the newest transaction. The folded public keys (linkable ring signature group) are stored in the blockchain:
![Fabric Transactions Tx Keys](../../../static/img/user-manual/Admin/10_fabric_transactions_tx_keys.png)
Concurrently, the folded public keys are also stored in the Central Authority’s database.

</details>

<details>
<summary>

### Voting Phase Actions

</summary>

**1. Explorer Single Transaction - Vote Cast**

A vote was cast. Open the newest transaction:
![Fabric Transactions Vote](../../../static/img/user-manual/Admin/11_fabric_transactions_vote.png)

**2. Explorer Single Transaction - Vote Cast**

See an LRS signature with the cast vote:
![Fabric Transactions Tx Vote](../../../static/img/user-manual/Admin/12_fabric_transactions_tx_vote.png)

**3. Logout**

After the election is completed, click “Log out” to safely log out:
![Logout](../../../static/img/user-manual/Admin/13_logout.png)

</details>
