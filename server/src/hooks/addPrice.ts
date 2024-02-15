import { CollectionAfterChangeHook } from 'payload/types';
import Stripe from 'stripe';

const OPERATION = 'create';

export const addPrice: CollectionAfterChangeHook = async ({
  operation,
  doc,
}) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01',
  });

  if (operation === OPERATION) {
    const priceObject = await stripe.prices.create({
      currency: 'inr',
      active: true,
      unit_amount: doc.amount * 100,
      product: doc.stripeID,
    });

    await stripe.products.update(doc.stripeID, {
      default_price: priceObject.id,
    });

    return doc;
  }
};
