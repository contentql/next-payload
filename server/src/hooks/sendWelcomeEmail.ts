import payload from 'payload';
import { CollectionAfterChangeHook } from 'payload/types';
import { welcomeMail } from '../mail-templates/welcome-mail';

const OPERATION = 'create';
const SUBJECT = 'Welcome To ContentQL';
export const sendWelcomeEmail: CollectionAfterChangeHook = async ({
  operation,
  doc,
}) => {
  if (operation === OPERATION) {
    payload.sendEmail({
      to: doc.email,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: SUBJECT,
      html: welcomeMail(doc),
    });
  }
};
