import { CollectionConfig } from "payload/types";
import { isAdminFieldLevel } from "../access/isAdmin";
import { sendWelcomeEmail } from "../hooks/sendWelcomeEmail";
import { sendForgetPasswordEmail } from "../hooks/sendForgetPasswordEmail";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    cookies: {
      secure: true,
      sameSite: "strict",
      domain: process.env.PAYLOAD_COOKIE_DOMAIN,
    },
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterForgotPassword: [sendForgetPasswordEmail],
    afterChange: [sendWelcomeEmail],
  },
  fields: [
    {
      name: "roles",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "user", value: "user" },
      ],
      defaultValue: ["user"],
      hasMany: true,
      saveToJWT: true,
      access: {
        update: isAdminFieldLevel,
        create: isAdminFieldLevel,
      },
    },
  ],
};

export default Users;
