# GraphCMS Product Uploader

## Intro

This application allows developer to upload a list of products to graphCMS.

The products used in this application is retrieved from https://makeup-api.herokuapp.com/

All rights and credits related to the products reserved to the respective owner


## Tech Stack

- [NodeJS](https://nodejs.org/en/)

- [GraphQL Request](https://www.npmjs.com/package/graphql-request)

- [P-Queue](https://www.npmjs.com/package/p-queue)


## Setup

1. Clone this repo

2. Replace "<YOUR_GRAPHCMS_ENDPOINT>" and "<YOUR_GRAPHCMS_TOKEN>" with your GraphCMS credentials

3. Install the project's dependency

```

$ yarn

```

## Usage

0. Make sure you are using Node v12 and above

1. Once you have done the setup above, run the upload script by firing the command bellow 

```

$ yarn start

```

2. You know the whole process is done once you see the queue onCompleted event log on your console