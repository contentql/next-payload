import { CollectionConfig } from "payload/types";
import { syncWithStripe } from "../hooks/syncWithStripe";

const Products: CollectionConfig = {
  slug: "products",
  hooks: {
    beforeChange: [syncWithStripe],
  },
  timestamps: true,
  admin: {
    defaultColumns: ["name"],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "price",
      label: "Price",
      type: "text",
    },
    {
      name: "priceId",
      label: "Price",
      type: "group",
      admin: {
        readOnly: true,
        description:
          "All pricing information is managed in Stripe and will be reflected here.",
      },
      fields: [
        {
          name: "id",
          label: "Stripe Price ID",
          type: "text",
          // admin: {
          //   components: {
          //     Field: ProductSelect,
          //   },
          // },
        },
        {
          name: "stripeJSON",
          label: "Stripe JSON",
          type: "textarea",
          admin: {
            readOnly: true,
            hidden: true,
            rows: 10,
          },
        },
      ],
    },
  ],
};

export default Products;
