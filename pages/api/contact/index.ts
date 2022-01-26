import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
const PASSWORD = process.env.password;

const contactHandler = (req: Request, res: Response) => {
  require('dotenv').config();
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'envienstudio@gmail.com',
        pass: PASSWORD,
      },
    });

    const { fullName, email, phone, message } = req.body;

    const emailData = {
      from: 'envienstudio@gmail.com',
      to: 'novrandobilly@gmail.com',
      subject: `Envien Studio inquiry from ${fullName} - ${email}`,
      text: 'Envien Studio Inquiry',
      html: `<div>
         <h4>Name: ${fullName} </h4>
         <h4>Email: ${email} </h4>
         <h4>Phone: ${phone} </h4>
         <p>${message}</p>
      </div>`,
    };

    transporter.sendMail(emailData, (err, info) => {
      if (err) {
        res.status(500).json({
          message:
            'Internal Server Error. Please try again later or contact us directly through the email or phone number below. We are sorry for the inconvenience.',
        });
      } else {
        res
          .status(201)
          .json({ message: 'Thank you for your inquiry. Your message has been successfully sent to Envien Studio.' });
      }
    });
  }
};

export default contactHandler;
