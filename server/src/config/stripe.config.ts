import { StripeConfig } from '@payloadcms/plugin-stripe/dist/types';
import { subscriptionCreatedOrUpdated } from '../webhooks/subscriptionCreatedOrUpdated';
import { subscriptionDeleted } from '../webhooks/subscriptionDeleted';
import { syncPriceJSON } from '../webhooks/syncPriceJSON';

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
    'product.created': syncPriceJSON,
    'product.updated': syncPriceJSON,
  },
  stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET,
};
