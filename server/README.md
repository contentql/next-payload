## Payload CMS Integration with Stripe

This repository contains code for integrating Payload CMS with Stripe, enabling management of products, prices, and subscriptions seamlessly. Below is an overview along with two approaches for adding default prices to products using webhooks and normal hooks after change.

### Features

- **Stripe Integration:** Integration with Stripe for managing product pricing and subscriptions.

### Stripe Webhooks Setup

To enable Stripe webhooks for your local development environment, run the following command:

```bash
npm run stripe:webhooks
```

This command sets up a webhook listener that forwards events to `localhost:4000/stripe/webhooks`. Make sure your local server is running while using this command.

### Synchronization Approaches

#### 1. Webhooks Approach

- **Description:** Utilizes Stripe webhooks to listen for events such as price creation or update in Stripe. When a price is created or updated, a webhook event triggers a function to sync the price JSON to the Payload CMS.
- **Implementation:** The `syncPriceJSONCreated` and `syncPriceJSONUpdated` functions handle the synchronization of price information between Stripe and Payload CMS.

#### 2. Normal Hook After Change Approach

- **Description:** Uses normal hooks after change in Payload CMS to trigger a function to add the default price when a new product is created or updated.
- **Implementation:** The `addPrice` function, executed as a collection hook after change, automatically adds a default price to a product in Stripe when a new product is created in the Payload CMS.
