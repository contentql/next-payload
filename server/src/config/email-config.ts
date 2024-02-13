import nodemailerSendgrid from 'nodemailer-sendgrid';

require('dotenv').config();

export const email = {
  fromName: process.env.SENDGRID_SENDER_NAME,
  fromAddress: process.env.SENDGRID_SENDER_EMAIL,
  transportOptions: nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  }),
};
