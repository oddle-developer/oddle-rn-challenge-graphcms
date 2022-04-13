# GraphCMS Product Uploader

## Intro

This app allows developer to upload a product list to GraphCMS

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

3. Replace "<YOUR_GRAPHCMS_ENDPOINT>" and "<YOUR_GRAPHCMS_TOKEN>" inside main.js with your GraphCMS credentials


## Usage

1. Make sure you are running Node v12 or above

2. Once you have done the setup above, run the upload script by firing the command bellow 

```

$ npm run start

```

3. You know the whole process is done once you see the queue onCompleted event log on your terminal