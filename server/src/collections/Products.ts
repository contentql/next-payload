import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  timestamps: true,
  admin: {
    defaultColumns: ['name'],
  },
  // hooks: {
  //   afterChange: [addPrice],
  // },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'amount',
      label: 'Amount',
      admin: {
        description: 'Enter your amount in inr',
      },
      type: 'number',
    },
    {
      name: 'price',
      label: 'Price',
      type: 'group',
      admin: {
        readOnly: true,
        description:
          'All pricing information is managed in Stripe and will be reflected here.',
      },
      fields: [
        {
          name: 'stripePriceID',
          label: 'Stripe Price ID',
          type: 'text',
        },
        {
          name: 'stripeJSON',
          label: 'Stripe JSON',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default Products;
