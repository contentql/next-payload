import {
  CollectionBeforeChangeHook,
  CollectionAfterOperationHook,
} from "payload/types";
import Stripe from "stripe";

export const syncWithStripe: CollectionBeforeChangeHook = async (args) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-08-01",
  });

  const { operation, data, originalDoc } = args;

  console.log(originalDoc);

  // if (operation === "create") {
  //   const product = await stripe.products.create({
  //     name: data.name,
  //     active: true,
  //     default_price_data: {
  //       currency: "INR",
  //       unit_amount: data.price * 100,
  //     },
  //   });
  //   console.log(originalDoc);
  //   return {
  //     ...data,
  //     stripeProductID: product.id,
  //     stripePriceID: product.default_price,
  //     // product,
  //   };
  // } else
  if (operation === "update") {
    await stripe.products.update(originalDoc.stripeID, {
      name: data.name,
      active: true,
    });

    if (data.price !== originalDoc.price) {
      const newPrice = await stripe.prices.create({
        product: originalDoc.stripeID,
        currency: "INR",
        unit_amount: data.price * 100,
      });

      await stripe.products.update(originalDoc.stripeID, {
        default_price: newPrice.id,
      });

      await stripe.prices.update(originalDoc.stripeID, {
        active: false,
      });

      return {
        ...data,
        stripePriceID: newPrice.id,
      };
    }
  }
};
