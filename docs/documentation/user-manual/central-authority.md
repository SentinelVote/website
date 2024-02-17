---
sidebar_position: 3
---

# Central Authority

## User Manual for Central Authority

<details>
<summary>

### 1. Actions performed on the registration/setup phase.

</summary>

**Login.**
Enter the admin’s credentials to login as admin:
![Admin Login](../../../static/img/user-manual/Admin/21_Admin.png)

**Home Page.**
The home page shows the list of users and their status: On the bottom left, a purple but-ton “Fold Keys” should be clicked once all voters have generated their public key, or the cutoff time for the voters to do so has passed:
![Home Incomplete](../../../static/img/user-manual/Admin/22_Admin.png)
When all voters have generated their public key, the admin is ready to click “Fold Keys.” Before that, compare the number of blockchain transactions:
![Home Complete](../../../static/img/user-manual/Admin/23_Admin.png)

**Hyperledger Explorer:**
Enter the admin’s credentials to login:
![Explorer Login](../../../static/img/user-manual/Admin/24_Admin.png)

**Explorer Dashboard.**
The dashboard displays information on the blockchain network:
![Explorer Home](../../../static/img/user-manual/Admin/25_Admin.png)

**Explorer Transactions.**
We note the total transactions, which is originally 4:
![Explorer Transactions](../../../static/img/user-manual/Admin/26_Admin.png)

**Home Page.**
We click on “Fold Keys”. This process is irreversible:
![Home Clicked Fold](../../../static/img/user-manual/Admin/23_Admin.png)

**Explorer Transactions.**
We note the total transactions, which is now 5:
![Explorer Transactions Keys](../../../static/img/user-manual/Admin/27_Admin.png)

**Explorer Single Transaction.**
We open and read the newest transaction. The folded public keys (also called the linkable ring signature group) is stored in the blockchain:
![Explorer Transactions Tx Keys](../../../static/img/user-manual/Admin/28ADMI~1.png)

</details>

<details>
<summary>

### 2. Actions performed on the voting phase.

</summary>

**Helios.**
The Helios platform will be accessible once the voting phase has started. We note the total votes, which is originally 0:
![Helios](../../../static/img/user-manual/Admin/29_Admin.png)

**Explorer Single Transaction.**
A vote was cast. We open the newest transaction:
![Explorer Transactions Tx Vote](../../../static/img/user-manual/Admin/30_Admin.png)

**Explorer Single Transaction.**
We see an LRS signature with a vote that was cast:
![Explorer Transactions Tx Vote](../../../static/img/user-manual/Admin/31_Admin.png)
![Explorer Transactions Tx Vote](../../../static/img/user-manual/Admin/32_Admin.png)

**Helios.**
Back on the Helios platform, we note the total votes, which is now 1:
![Helios](../../../static/img/user-manual/Admin/33_Admin.png)

**Publish Results.**
After the election is completed, click on “Publish Results” to officially end the elections, and announce the results to the public. Click “Log out” to safely log out after announc-ing the results.
![Results](../../../static/img/user-manual/Admin/34_Admin.png)

</details>

<details>
<summary>

### 3. Actions performed to allow public to verify elections integrity.

</summary>

**Hyperledger Explorer.**
Enter the admin’s credentials to login:
![Explorer](../../../static/img/user-manual/Admin/01_Admin.jpg)

**User Management.**
Click on the “person” icon at the top right of the blockchain explorer:
![Explorer](../../../static/img/user-manual/Admin/02_Admin.jpg)
Click on the “User Management” button to open user management screen:
![Explorer](../../../static/img/user-manual/Admin/03_Admin.jpg)

**Add public user account.**
Click on “Add User” to open up form to register new user:
![Explorer](../../../static/img/user-manual/Admin/04_Admin.jpg)
Enter the required fields such as “User”, “Password”, “Password(confirm)”, and “Roles”:
![Explorer](../../../static/img/user-manual/Admin/05_Admin.jpg)
Click on the “REGISTER” button to create a public account. Upon successful comple-tion, members of the public will be able to access the blockchain explorer to view and verify the integrity of the votes:
![Explorer](../../../static/img/user-manual/Admin/06_Admin.jpg)

</details>
