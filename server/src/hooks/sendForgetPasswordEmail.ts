import payload from 'payload';
import { CollectionAfterForgotPasswordHook } from 'payload/types';

export const sendForgetPasswordEmail: CollectionAfterForgotPasswordHook =
  async ({ context, collection, args }) => {
    payload.sendEmail({
      to: args.data.email,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: 'Forget your password',
      html: '<b>Hey there!</b><br/>forget password',
    });
  };
