---
sidebar_position: 3
---

# Project User Manual

## Voter

<details>
<summary>

### Actions performed on the registration/setup phase.

</summary>

**Index / Login Page.** The login page is the default page for all users:

-     Email/Password Login

  ![Alt text](../../static\img\user-manual\User\1_login.png)

-     SingPass Login

  ![Alt text](../../static\img\user-manual\User\2_singpass.png)

**Login.** Fill up the email address and password, and click on the “login” button:
![Alt text](../../static\img\user-manual\User\3_login_filled.png)

**Key Generation.** Generate a pair of public and private keys:
![Alt text](../../static\img\user-manual\User\4_generate_download.png)

The zip file’s contents are as follows:
![Alt text](../../static\img\user-manual\User\4_generate_shown.png)

</details>

<details>
<summary>

### Optional actions performed prior to the voting phase.

</summary>

**Login.** Fill up the email address and password, and click on the “login” button:
![Alt text](../../static\img\user-manual\User\5_login_again.png)

If the voter has their generated keys, a waiting page is displayed. Click “Exit” to log out.
![Alt text](../../static\img\user-manual\User\6_wait.png)

</details>

<details>
<summary>

### Actions performed on the voting phase.

</summary>

**Login.** Fill up the email address and password, and click on the “login” button:
![Alt text](../../static\img\user-manual\User\5_login_again.png)

**Upload.** Upload the private key that you generated earlier:
![Alt text](../../static\img\user-manual\User\7_upload.png)

**Candidate Selection.** Select the checkbox on the candidate you are voting for:
![Alt text](../../static\img\user-manual\User\8_checkbox.png)

Click the “Submit Vote” button:
![Alt text](../../static\img\user-manual\User\9_submit.png)

Click the “Confirm” button:
![Alt text](../../static\img\user-manual\User\10_confirm.png)

The thank you page is displayed. Click “Exit” to safely log out:
![Alt text](../../static\img\user-manual\User\10_thankyou.png)

</details>

## Central Authority

<details>
<summary>

### Actions performed on the registration/setup phase.

</summary>

**Login.** Enter the admin’s credentials to login as admin:
![Alt text](../../static\img\user-manual\Admin\1_login.png)

**Home page.** The home page shows the list of users and their status. On the bottom left, a purple button “Fold Keys” should be clicked once all voters have generated their public key, or the cutoff time for the voters to do so has passed:
![Alt text](../../static\img\user-manual\Admin\2_home_incomplete.png)

When all voters have generated their public key, the admin is ready to click “Fold Keys”. Do not click it yet, because we will first compare the number of blockchain transactions:
![Alt text](../../static\img\user-manual\Admin\3_home_complete.png)

**Hyperledger Explorer.** Enter the admin’s credentials to login:
![Alt text](../../static\img\user-manual\Admin\4_fabric_login.png)

**Explorer Dashboard.** The dashboard displays information on the blockchain network:
![Alt text](../../static\img\user-manual\Admin\5_fabric_home.png)

**Explorer Transactions.** We note the total transactions, which is originally 6:
![Alt text](../../static\img\user-manual\Admin\6_fabric_transactions.png)

**Home page.** We click on “Fold Keys”. This process is irreversible:
![Alt text](../../static\img\user-manual\Admin\8_home_clicked_fold.png)

**Explorer Transactions.** We note the total transactions, which is now 7:
![Alt text](../../static\img\user-manual\Admin\9_fabric_transactions_keys.png)

**Explorer Single Transaction.** We open and read the newest transaction. The folded public keys (also called the linkable ring signature group) is stored in the blockchain:
![Alt text](../../static\img\user-manual\Admin\10_fabric_transactions_tx_keys.png)
Concurrently, the folded public keys was also stored in the Central Authority’s database.

</details>

<details>
<summary>

### Actions performed on the voting phase.

</summary>

**Explorer Single Transaction.** A vote was cast. We open the newest transaction:
![Alt text](../../static\img\user-manual\Admin\11_fabric_transactions_vote.png)

**Explorer Single Transaction.** We see an LRS signature with a vote that was cast:
![Alt text](../../static\img\user-manual\Admin\12_fabric_transactions_tx_vote.png)

**Logout\*\*** After the election is completed, click “Log out” to safely log out:
![Alt text](../../static\img\user-manual\Admin\13_logout.png)

</details>
