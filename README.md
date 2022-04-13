# Oddle RN Challenge - GraphCMS Products Uploader

## Intro

This app allows developer to upload a list of products to GraphCMS

The products utilized in this app were obtained from https://makeup-api.herokuapp.com/

All product rights and credits are reserved for the rightful owner


## Tech Stack

- [NodeJS](https://nodejs.org/en/)

- [GraphQL Request](https://www.npmjs.com/package/graphql-request)

- [P-Queue](https://www.npmjs.com/package/p-queue)


## Setup

1. Clone this repo

2. Install the project's dependency

```

$ npm install

```

3. Go to your GraphCMS project > Project Settings > Access > Api Access > Endpoints

4. Copy the "Content API" URL and replace "<YOUR_GRAPHCMS_ENDPOINT>" inside the config.js file with the URL 

5. Go to your GraphCMS project > Project Settings > Access > Api Access > Permanent Auth Tokens

6. Press the "Create token" button

7. Insert the "Token name" to your liking and press the "Create & configure permissions"

8. Once you are brought to the token details page, scroll down to the "Content API" section and press the "Create permission" button

9. Once the "Create permission" modal appears, set the "Model" to "All", check the "Read, Create, Publish" permissions and press the "Create" button

10. On the same page, scroll down to the "Management API" section, press the "No, I'll configure custom permissions" button and then press the "Edit permissions" button

11. Once the "Update Management API permissions" modal appears, check the "Read existing environments, Create new models, Create new fields, Update existing fields" permissions and press the "Update" button

12. Once you have set the token permissions, copy the value of the token and replace "<YOUR_GRAPHCMS_TOKEN>" inside the config.js with the value

13. Now you are ready to upload the products to your GraphCMS project


## Usage

1. Make sure you are running Node v12 or above

2. Once you have done the setup above, run the upload script by firing the command bellow 

```

$ npm run start

```

3. You know the whole process is done once the process exits