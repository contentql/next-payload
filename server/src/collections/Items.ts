import { CollectionConfig } from "payload/types";
import { syncWithStripe } from "../hooks/syncWithStripe";

const Items: CollectionConfig = {
  slug: "items",
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
  ],
};

export default Items;
