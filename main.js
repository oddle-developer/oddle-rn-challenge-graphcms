import PQueue from "p-queue/dist";
import { GraphQLClient, gql } from "graphql-request";
import { newMigration, FieldType} from "@graphcms/management";
import { GRAPHCMS_ENDPOINT, GRAPHCMS_TOKEN } from "./config"
import data from "./products.json";

const client = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
  },
});

const migration = newMigration({
  endpoint: GRAPHCMS_ENDPOINT,
  authToken: GRAPHCMS_TOKEN
})

const delay = (t) => new Promise((resolve) => setTimeout(() => resolve(), t));

let count = 0;

(async () => {
  const product = migration.createModel({
    apiId: "Product",
    apiIdPlural: "Products",
    displayName: "Product",
  });
  
  product.addSimpleField({
    apiId: "apiFeaturedImage",
    displayName: "API Featured Image",
    type: FieldType.String,
  });

  product.addSimpleField({
    apiId: "brand",
    displayName: "Brand",
    type: FieldType.String,
  });

  product.addSimpleField({
    apiId: "category",
    displayName: "Category",
    type: FieldType.String,
  });

  product.addSimpleField({
    apiId: "currency",
    displayName: "Currency",
    type: FieldType.String,
  });

  product.addSimpleField({
    apiId: "description",
    displayName: "Description",
    type: FieldType.String,
  });

  product.addSimpleField({
    apiId: "name",
    displayName: "Name",
    type: FieldType.String,
  })


  product.addSimpleField({
    apiId: "price",
    displayName: "Price",
    type: FieldType.String,
  })


  product.addSimpleField({
    apiId: "priceSign",
    displayName: "Price Sign",
    type: FieldType.String,
  })

  product.addSimpleField({
    apiId: "productApiUrl",
    displayName: "Product API Url",
    type: FieldType.String,
  })


  product.addSimpleField({
    apiId: "productID",
    displayName: "Product ID",
    isUnique: true,
    type: FieldType.Int,
  })

  product.addSimpleField({
    apiId: "productLink",
    displayName: "Product Link",
    type: FieldType.String,
  })

  product.addSimpleField({
    apiId: "productType",
    displayName: "Product Type",
    type: FieldType.String,
  })


  product.addSimpleField({
    apiId: "rating",
    displayName: "Rating",
    type: FieldType.Float,
  })


  product.addSimpleField({
    apiId: "tagList",
    displayName: "Tag List",
    isList: true,
    type: FieldType.String,
  })


  product.addSimpleField({
    apiId: "websiteLink",
    displayName: "Website Link",
    type: FieldType.String,
  })

  console.log("🚀 ~ Generating Product schema (may take up to 2 minutes)")
  await migration.run(true);
  console.log("🚀 ~ Done generating Product schema")

  const queue = new PQueue({
    concurrency: 10,
    timeout: 2 * 60 * 1000,
  });

  queue.on("active", () => {
    console.log(
      `🚀 ~ Working on task #${++count}. Current job size: ${queue.size}`
    );
  });

  queue.on("add", () => {
    console.log(`🚀 ~ Task is added. Current job size: ${queue.size}`);
  });

  queue.on("next", () => {
    console.log(
      `🚀 ~ Task is completed. Current job size: ${queue.size}`
    );
  });

  queue.on("completed", (result) => {
    console.log("🚀 ~ Completed:", result);
  });

  queue.on('error', error => {
    console.error("😔 ~ ", error);
  });

  await queue.addAll(
    data.map((row) => {
      return async () => {
        await delay(750);
        
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

            publishProduct(where : { productID: $id }, to: PUBLISHED) {
              id
            }
          }
        `;
      
        return client.request(query, row);
      };
    })
  );

  queue.start();
})();
