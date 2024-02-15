import { StripeConfig } from '@payloadcms/plugin-stripe/dist/types';
import { subscriptionCreatedOrUpdated } from '../webhooks/subscriptionCreatedOrUpdated';
import { subscriptionDeleted } from '../webhooks/subscriptionDeleted';
import { syncPriceJSONCreated } from '../webhooks/syncPriceJSONCreated';
import { syncPriceJSONUpdated } from '../webhooks/syncPriceJSONUpdated';

export const stripePluginConfig: StripeConfig = {
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  isTestKey: process.env.PAYLOAD_PUBLIC_IS_STRIPE_TEST_KEY === 'true',
  logs: true,
  sync: [
    {
      collection: 'customers',
      stripeResourceType: 'customers',
      stripeResourceTypeSingular: 'customer',
      fields: [
        {
          fieldPath: 'name',
          stripeProperty: 'name',
        },
        {
          fieldPath: 'email',
          stripeProperty: 'email',
        },
      ],
    },
    {
      collection: 'products',
      stripeResourceType: 'products',
      stripeResourceTypeSingular: 'product',
      fields: [
        {
          fieldPath: 'name',
          stripeProperty: 'name',
        },
        {
          fieldPath: 'price.stripePriceID',
          stripeProperty: 'default_price',
        },
      ],
    },
  ],
  rest: false,
  webhooks: {
    'customer.subscription.created': subscriptionCreatedOrUpdated,
    'customer.subscription.updated': subscriptionCreatedOrUpdated,
    'customer.subscription.deleted': subscriptionDeleted,
    'product.created': syncPriceJSONCreated,
    'product.updated': syncPriceJSONUpdated,
  },
  stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET,
};
