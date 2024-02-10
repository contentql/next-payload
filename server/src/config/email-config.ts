import nodemailerSendgrid from 'nodemailer-sendgrid';

require('dotenv').config();

export const email = {
  fromName: 'Akhil naidu',
  fromAddress: 'akhil@contentql.io',
  transportOptions: nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  }),
};
