import payload from 'payload';
import { CollectionConfig } from 'payload/types';
import { isAdminFieldLevel } from '../access/isAdmin';

interface GenerateEmailHTML {
  token: string;
  user: { email: string };
}

const Users: CollectionConfig = {
  slug: 'users',
  // auth:
  // {
  //   forgotPassword: {
  //     generateEmailHTML: ({ token, user }: GenerateEmailHTML) => {
  //       // Use the token provided to allow your user to reset their password
  //       const resetPasswordURL = `https://yourfrontend.com/reset-password?token=${token}`;

  //       return resetPasswordTemplate(token, user, resetPasswordURL);
  //     },
  //   },
  // },
  auth: {
    cookies: {
      secure: true,
      sameSite: 'lax',
      // domain: '',
    },
  },
  // auth: true,
  admin: {
    useAsTitle: 'email',
  },
  hooks: {
    afterForgotPassword: [
      ({ context, collection, args }) => {
        //console.log(collection.auth);
        //console.log({ args });
        payload.sendEmail({
          to: args.data.email,
          from: 'akhil@contentql.io',
          subject: 'Forget your password',
          html: '<b>Hey there!</b><br/>forget password',
        });
      },
    ],
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          payload.sendEmail({
            to: doc.email,
            from: 'akhil@contentql.io',
            subject: 'Welcome To Payload',
            html: '<b>Hey there!</b><br/>Welcome to Payload!',
          });
        }
      },
    ],
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
