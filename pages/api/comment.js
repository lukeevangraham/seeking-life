const nodemailer = require("nodemailer");
import axios from "axios";
import { getStrapiURL } from "@/lib/api";

export default async (req, res) => {
  // HANDLE THE EMAIL SIDE OF THINGS
  const transporter = nodemailer.createTransport({
    host: "mail.gandi.net",
    port: "465",
    secure: "true",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages", success);
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: '"SEEKINGLIFE.BLOG" <donotreply@seekinglife.blog>',
        to: "geoff@rbcpc.org, luke@grahamwebworks.com",
        // to: "luke@grahamwebworks.com",
        subject: "Comment Form Submission from seekinglife.blog",
        text: `${req.body.Name} (${req.body.Email}) just posted this comment via the form at seekinglife.blog:
          
          ${req.body.Message}`,
      },
      (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      }
    );
  });

  // main().catch(console.error);
  res.status(200).json({ status: 200 });
};
