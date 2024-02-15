import {
  CollectionBeforeChangeHook,
  CollectionAfterOperationHook,
} from "payload/types";
import Stripe from "stripe";

export const syncWithStripe: CollectionBeforeChangeHook = async (args) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {});

  const { operation, data, originalDoc } = args;

  if (operation === "create") {
    try {
      const product = await stripe.products.create({
        name: data.name,
        active: true,
        default_price_data: {
          currency: "INR",
          unit_amount: data.price * 100,
        },
        expand: ["default_price"],
      });
      console.log("product", product.id);
      console.log("priceId", product.default_price.id);
      return {
        ...data,

        stripeProductID: product.id,
        // eslint-disable-next-line
        // @ts-ignore
        stripePriceID: product.default_price.id,
      };
    } catch (error) {
      console.log("Error creating product my webhook", error);
    }
  }
  // else if (operation === "update") {
  //   console.log("operation", operation);
  //   console.log("data", data);
  //   console.log(originalDoc);

  //   try {
  //     await stripe.products.update(originalDoc.stripeID, {
  //       name: data.name,
  //       active: true,
  //     });
  //   } catch (error) {
  //     console.log("Error updating product my webhook", error);
  //   }

  //   if (data.price !== originalDoc.price) {
  //     try {
  //       const newPrice = await stripe.prices.create({
  //         product: originalDoc.stripeID,
  //         currency: "INR",
  //         unit_amount: data.price * 100,
  //       });

  //       await stripe.products.update(originalDoc.stripeID, {
  //         default_price: newPrice.id,
  //       });

  //       // await stripe.prices.update(originalDoc.stripePriceID, {
  //       //   active: false,
  //       // });

  //       return {
  //         ...data,
  //         stripePriceID: newPrice.id,
  //       };
  //     } catch (error) {
  //       console.error("Error updating price my webhook", error);
  //     }
  //   }
  // }
};
