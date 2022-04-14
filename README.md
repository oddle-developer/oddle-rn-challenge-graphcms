# Oddle RN Challenge - GraphCMS Products Uploader

## Intro

This app allows developer to upload a list of products to GraphCMS

The products utilized in this app were obtained from https://makeup-api.herokuapp.com/

All product rights and credits are reserved for the rightful owner

## Setup

1. Clone this repo

2. Install the project's dependency

```

$ npm install

```

3. Go to your GraphCMS project > Project Settings > Access > Api Access > Endpoints

![](/assets/ss_1.png)


4. Copy the "Content API" URL and replace "<YOUR_GRAPHCMS_ENDPOINT>" inside the config.js file with the URL 

![](/assets/ss_2.png)

5. Go to your GraphCMS project > Project Settings > Access > Api Access > Permanent Auth Tokens

![](/assets/ss_3.png)

6. Press the "Create token" button

![](/assets/ss_4.png)

7. Insert the "Token name" to your liking and press the "Create & configure permissions"

![](/assets/ss_5.png)

8. Once you are brought to the token details page, scroll down to the "Content API" section and press the "Create permission" button

![](/assets/ss_6.png)

9. Once the "Create permission" modal appears, set the "Model" to "All", check the "Read, Create, Publish" permissions and press the "Create" button

![](/assets/ss_7.png)

10. On the same page, scroll down to the "Management API" section, press the "No, I'll configure custom permissions" button and then press the "Edit permissions" button

![](/assets/ss_8.png)
![](/assets/ss_9.png)

11. Once the "Update Management API permissions" modal appears, check the "Read existing environments, Create new models, Create new fields, Update existing fields" permissions and press the "Update" button

![](/assets/ss_10.png)

12. Once you have set the token permissions. On the same page, scroll all the way up and copy the value of the token and replace "<YOUR_GRAPHCMS_TOKEN>" inside the config.js with the value

![](/assets/ss_11.png)

13. Now you are ready to run the upload script


## Usage

1. Make sure you are running Node v12 or above

2. Once you have done the setup above, run the upload script by firing the command bellow. The upload script will upload 931 products to your GraphCMS project

```

$ npm run start

```

3. You know the whole process is done once the process exits itself
![](/assets/ss_12.png)

4. To verify, head to your GraphCMS project > Content > Product. At the bottom of the page, you should see at least 900++ items are available in the database
![](/assets/ss_13.png)

    * The number of items does not need to be exactly 931 items. As long as we have enough items to work with (900++), it is good enough