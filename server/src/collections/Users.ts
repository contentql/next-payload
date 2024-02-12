import { CollectionConfig } from 'payload/types';
import { isAdminFieldLevel } from '../access/isAdmin';
import { sendWelcomeEmail } from '../hooks/sendWelcomeEmail';
import { resetPasswordTemplate } from '../mail-templates/reset-password';

// const afterLoginHook: CollectionAfterForgotPasswordHook = async ({
//   args,
//   collection,
//   context,
// }) => {
//   console.log('req: ', collection);
//   // console.log("user: ", param.user);
//   // console.log("token: ", param.token);
//   //return user;
// };

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      secure: true,
      sameSite: 'strict',
      domain: process.env.PAYLOAD_COOKIE_DOMAIN,
    },
    forgotPassword: {
      generateEmailHTML: ({ req, token, user }) => {
        // Use the token provided to allow your user to reset their password
        const resetPasswordURL = `${process.env.ALLOW_URL}/forgot-password?token=${token}`;

        return resetPasswordTemplate(token, user, resetPasswordURL);
      },
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  hooks: {
    //afterForgotPassword: [afterLoginHook],
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
