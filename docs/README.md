# Allie's Marketplace Setup Guide 

## Requirements

1. MongoDB Atlas Account [create here](https://account.mongodb.com/account/login)
1. Supabase Account [create here](https://app.supabase.com/sign-in)
1. Your Mintbase Store Address _(Eg: marmajchan.mintbase1.near)_

## Let's Setup

### MongoDB
 To create a backend of this app you need a database connection url to store the data.
 
 
#### Steps to create database connection URL:

1. Open MongoDB Atlas and login/create your account.
1. Create a new project (refer to the [documentation](https://www.mongodb.com/docs/atlas/government/tutorial/create-project/) if needed).
1. Click "Connect" and select "Connect Your Application".
1. Copy the connection string and replace `<password>` with your user password. Save this string and password for later use when deploying the backend.
1. To set the network access to "Allow access from anywhere" to run the app in Vercel:
    1. Go to the "Network Access" tab on the left side of the screen.
    1. Click the "Add IP Address" button on the top right of the screen in the "Network Access" section.
    1. Click "Allow Access From Anywhere" and save.

### Supabase
 To store the collection images on supabase we need API key and Project url. 
 
 
#### Steps to create supabase storage:
1. Open Supabase and login/create your account.
2. Click the "New Project" button on top of your Supabase dashboard.
3. Enter your project name and create the project.
4. To create the storage bucket:
    1. Go to the "Storage" tab and click the "**New Bucket**" button on the top left.
    2. Type the bucket as **"collectionimages"** - _make sure you give the bucket name as "collectionimages" correctly_.
    3. Toggle the Public bucket on and click save.
5. Now the bucket is created. To access the bucket from our app, we have to add a policy.
    1. Go to the storage page and on the left side, you can see the Configuration. Below that, there is a "Policies" section.
    2. Go to "**Policies**" and click the "**New Policy**" button in the "**Other policies under storage.objects**" section.
    3. Click "Get started quickly" and use the "Enable read access to everyone" template. 
    4. Select **ALL** as an option in the "**Allowed operation**" category.
    5. Click "**Review**" and "**Save Policy**".
    6. Done! You created the policy.
6. Now, to connect our app with our Supabase storage, we need an API key.
    1. To get our API key and URL, go to the project settings tab.
    2. In project settings, click **API**.
    3. Now you can see your Project URL and Project API keys there.
    4. Copy those two and save them somewhere else for later use.


### Backend Deployment
 To deploy our backend node.js app we are using vercel. 
 
 
#### Steps to deploy our backend app:
1. Fork this repo
1. Now go to  [vercel](https://vercel.com/) and **login/create** your account with your github account.
1. On your vercel dashboard click **"Add New"** button on top left and select project.
1. Import this Repository and Configure The Project.
    1. Set project name as you wish
    1. On Root Directory click **"Edit"** button
    1. Now select backend and click **"Continue"** button 
    1. Click Environment Variables and add this variables with your own values.
       | Name  | Value |
       | ------------- |:-------------:|
       | `NEAR_NETWORK`      | Type which near network your NFTs want to store `mainnet` or `testnet`      |
       | `OWNER_WALLET`      | Enter your near wallet address      |
       | `DB_CONNECTION_URL`     | Paste the Mongodb database connection string here     |
    1. Click **"Deploy"** 
   > make sure the <password\> in connection string is replaced with your database user password
1. wait till the deployment is over and you can see the congratulations message.

_After the app is Deployed click the app url and make sure you got the "Success" in your browser  tab. If you got it you deployed the backend successfully._ 
    
### Front Deployment
 The final step to get our app ready. 
 
 
#### Steps to deploy our frontend:
1.  On your [vercel](https://vercel.com/) dashboard click **"Add New"** button on top left and select project.
1. Import this Repository
    1. Set project name as you wish
    1. On Root Directory click **"Edit"** button
    1. Now select frontend and click **"Continue"** button 
    1. Click **Environment Variables** and add this variables with your own values.
        | Name  | Value |
        | ------------- |:-------------:|
        | `NEXT_PUBLIC_NEAR_NETWORK`      | Type which near network your NFTs want to store `mainnet` or `testnet`      |
        | `NEXT_PUBLIC_OWNER`      | Enter your near wallet address  _(eg: chan.near )_    |
        | `NEXT_PUBLIC_CONTRACT_ID`     | Your Mintbase Store Address _(Eg: marmajchan.mintbase1.near)_     |
        | `NEXT_PUBLIC_REFERRAL_ID`      | Enter referral near wallet address  _(eg: marmaj.near )_       |
        | `NEXT_PUBLIC_BACKEND_URL`      | Enter the deployed Backend URL (eg: https://backendproject.vercel.app)        |
        | `NEXT_PUBLIC_SUPABASE_PROJECT_URL`     | Paste the your Supabase project URL (that you saved)     |
        | `NEXT_PUBLIC_SUPABASE_PROJECT_API_KEY` |  Paste the your Supabase API key (that you saved)  |
    1. Click **"Deploy"** 
> Make sure the backend URL is entered without backslash at the end of URL, Enter as https://backendproject.vercel.app not https://backendproject.vercel.app/
    
    
Wait till the deployment is over and you can see the congrats message.
 
Now click on your app URL to see your app live.  

After the app is Deployed connect with your wallet ID (_Which you give as owner wallet ID_) and check that you got the **"mint, list and create collection"** in your navbar. if that shows then you  successfully deployed your app. Now try to mint , list and create the collection to test that your frontend and backend is connected successfully.   
