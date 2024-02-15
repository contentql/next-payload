export const syncPriceJSONCreated = async (args) => {
  const { event, payload, stripe } = args;

  const { id: eventID } = event.data.object;

  let doc;

  // First lookup the product in Payload
  try {
    const productQuery = await payload.find({
      collection: 'products',
      where: {
        stripeID: {
          equals: eventID,
        },
      },
    });
    doc = productQuery.docs?.[0];
  } catch (error: any) {
    payload.logger.error(`Error finding product ${error?.message}`);
  }

  try {
    const stripePrice = await stripe.prices.create({
      currency: 'inr',
      active: true,
      unit_amount: doc.amount * 100,
      product: doc.stripeID,
    });

    await stripe.products.update(doc.stripeID, {
      default_price: stripePrice.id,
    });

    await payload.update({
      collection: 'products',
      id: doc?.id,
      data: {
        price: {
          stripeJSON: JSON.stringify(stripePrice),
        },
        amount: stripePrice.unit_amount / 100,
        skipSync: false,
      },
    });

    payload.logger.info(`✅ Successfully updated product price.`);
  } catch (error) {
    payload.logger.error(`- Error updating product price: ${error}`);
  }
};
