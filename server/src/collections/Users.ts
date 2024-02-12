import { CollectionConfig } from 'payload/types';
import { isAdminFieldLevel } from '../access/isAdmin';
import { sendWelcomeEmail } from '../hooks/sendWelcomeEmail';
import { resetPasswordTemplate } from '../mail-templates/reset-password';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      secure: true,
      sameSite: 'strict',
      domain: process.env.PAYLOAD_COOKIE_DOMAIN,
    },
    forgotPassword: {
      generateEmailHTML: resetPasswordTemplate,
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  hooks: {
    afterChange: [sendWelcomeEmail],
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'user', value: 'user' },
      ],
      defaultValue: ['user'],
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
