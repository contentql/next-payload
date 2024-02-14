import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import stripePlugin from "@payloadcms/plugin-stripe";

import Users from "./collections/Users";
import Todos from "./collections/Todos";
import Products from "./collections/Products";
import { subscriptionCreatedOrUpdated } from "./webhooks/subscriptionCreatedOrUpdated";
import { subscriptionDeleted } from "./webhooks/subscriptionDeleted";
import { syncPriceJSON } from "./webhooks/syncPriceJSON";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Todos, Products],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    payloadCloud(),
    stripePlugin({
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      isTestKey: process.env.PAYLOAD_PUBLIC_IS_STRIPE_TEST_KEY === "true",
      logs: true,
      sync: [
        {
          collection: "customers",
          stripeResourceType: "customers",
          stripeResourceTypeSingular: "customer",
          fields: [
            {
              fieldPath: "name",
              stripeProperty: "name",
            },
            {
              fieldPath: "email",
              stripeProperty: "email",
            },
            // NOTE: nested fields are not supported yet, because the Stripe API keeps everything separate at the top-level
            // because of this, we need to wire our own custom webhooks to handle these changes
            // In the future, support for nested fields may look something like this:
            // {
            //   field: 'subscriptions.name',
            //   property: 'plan.name',
            // }
          ],
        },
        {
          collection: "products",
          stripeResourceType: "products",
          stripeResourceTypeSingular: "product",
          fields: [
            {
              fieldPath: "name",
              stripeProperty: "name",
            },
            {
              fieldPath: "price.stripePriceID",
              stripeProperty: "default_price",
            },
          ],
        },
      ],
      rest: false,
      webhooks: {
        "customer.subscription.created": subscriptionCreatedOrUpdated,
        "customer.subscription.updated": subscriptionCreatedOrUpdated,
        "customer.subscription.deleted": subscriptionDeleted,
        "product.created": syncPriceJSON,
        "product.updated": syncPriceJSON,
      },
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET,
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.PAYLOAD_PUBLIC_CLIENT_URL,
  ].filter(Boolean),
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.PAYLOAD_PUBLIC_CLIENT_URL,
  ].filter(Boolean),
});
