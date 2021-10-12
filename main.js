import PQueue from "p-queue/dist";
import { GraphQLClient, gql } from "graphql-request";
import data from "./products.json";

const GRAPHCMS_ENDPOINT = "<YOUR_GRAPHCMS_ENDPOINT>";
const GRAPHCMS_TOKEN = "<YOUR_GRAPHCMS_TOKEN>";

const client = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
  },
});

let count = 0;

const delay = (t) => new Promise((resolve) => setTimeout(() => resolve(), t));

const createContentEntry = async (data) => {
  const query = gql`
    mutation createProduct(
      $api_featured_image: String
      $brand: String
      $name: String
      $category: String
      $currency: String
      $description: String
      $price: String
      $price_sign: String
      $product_api_url: String
      $id: Int
      $product_link: String
      $product_type: String
      $rating: Float
      $tag_list: [String!]
      $website_link: String
    ) {
      createProduct(
        data: {
          apiFeaturedImage: $api_featured_image
          brand: $brand
          category: $category
          currency: $currency
          description: $description
          name: $name
          price: $price
          priceSign: $price_sign
          productApiUrl: $product_api_url
          productID: $id
          productLink: $product_link
          productType: $product_type
          rating: $rating
          tagList: $tag_list
          websiteLink: $website_link
        }
      ) {
        id
      }
    }
  `;

  return client.request(query, data);
};

const run = async () => {
  const queue = new PQueue({
    concurrency: 5,
    timeout: 2 * 60 * 1000,
  });

  queue.on("active", () => {
    console.log(
      `Working on item #${++count}. Size: ${queue.size} Pending: ${
        queue.pending
      }`
    );
  });

  queue.on("add", () => {
    console.log(`Task is added. Size: ${queue.size} Pending: ${queue.pending}`);
  });

  queue.on("next", () => {
    console.log(
      `Task is completed. Size: ${queue.size} Pending: ${queue.pending}`
    );
  });

  queue.on("completed", (result) => {
    console.log("Completed:", result);
  });

  await queue.addAll(
    data.map((row) => {
      console.log("Creating job:", row.id);
      return async () => {
        await delay(1000);
        return createContentEntry(row);
      };
    })
  );

  queue.start();
};

run();
