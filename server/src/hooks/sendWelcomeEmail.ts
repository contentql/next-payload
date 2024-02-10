import { CollectionAfterChangeHook } from 'payload/types';
import payload from 'payload';

export const sendWelcomeEmail: CollectionAfterChangeHook = async ({
  operation,
  doc,
}) => {
  if (operation === 'create') {
    payload.sendEmail({
      to: doc.email,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: 'Welcome To Payload',
      html: '<b>Hey there!</b><br/>Welcome to Payload!',
    });
  }
};
