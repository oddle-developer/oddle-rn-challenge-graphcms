# Oddle RN Challenge - GraphCMS Products Uploader

## Intro

As mentioned earlier in the [Oddle RN Challenge](https://github.com/oddle-developer/oddle-rn-challenge) instructions, you Product Listing App must use the products provided in this repo that are retrieved from your GraphCMS project

The above-mentioned products are found inside the [products.json](/products.json) file and the Oddle RN Challenge - GraphCMS Products Uploader app will help you in uploading them to your GraphCMS project

- [GraphCMS Project Setup](#graphcms-project-setup)
- [Upload the products](#upload-the-products)

## GraphCMS Project Setup

Before we begin uploading the products, we must first complete the GraphCMS project setup. To get your project ready, follow the step-by-step guide below

1. Go to your GraphCMS project > Project Settings > Access > Api Access > Endpoints

![](/assets/ss_1.png)


2. Copy the "Content API" URL and replace "<YOUR_GRAPHCMS_ENDPOINT>" inside the config.js file with the URL 

![](/assets/ss_2.png)

3. Go to your GraphCMS project > Project Settings > Access > Api Access > Permanent Auth Tokens

![](/assets/ss_3.png)

4. Press the "Create token" button

![](/assets/ss_4.png)

5. Insert the "Token name" to your liking and press the "Create & configure permissions"

![](/assets/ss_5.png)

6. Once you are brought to the token details page, scroll down to the "Content API" section and press the "Create permission" button

![](/assets/ss_6.png)

7. Once the "Create permission" modal appears, set the "Model" to "All", check the "Read, Create, Publish" permissions and press the "Create" button

![](/assets/ss_7.png)

8. On the same page, scroll down to the "Management API" section, press the "No, I'll configure custom permissions" button and then press the "Edit permissions" button

![](/assets/ss_8.png)
![](/assets/ss_9.png)

9. Once the "Update Management API permissions" modal appears, check the "Read existing environments, Create new models, Update existing models, Create new fields, Update existing fields" permissions and press the "Update" button

![](/assets/ss_10_1.png)

10. Once you have set the token permissions. On the same page, scroll all the way up and copy the value of the token and replace "<YOUR_GRAPHCMS_TOKEN>" inside the config.js with the value

![](/assets/ss_11.png)

11. Now you are ready to upload the products to your GraphCMS project

## Upload the products

Once you have done the setup above, upload the products to your GraphCMS project following the steps outlined bellow

1. Make sure you are running Node v12 or above

2. Install the project's dependency

```

$ npm install

```


3. In the repo root folder, trigger the following command

```

$ npm run start

```

4. You know the whole process is done once the process exits itself
![](/assets/ss_12.png)

5. To verify, head to your GraphCMS project > Content > Product. At the bottom of the page, you should see at least 900++ items available in your GraphCMS project
![](/assets/ss_13.png)

    * The number of items does not need to be exactly 931 items like how it is shown in the picture. As long as we have enough items to work with (900++), it is good enough


## Credits

The products in this repo were obtained from https://makeup-api.herokuapp.com/

All product rights and credits are reserved for the rightful owner
