const nodemailer = require("nodemailer");

export default async (req, res) => {
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
        subject: "Contact Form Submission from seekinglife.blog",
        text: `${req.body.name} (${req.body.email}) just sent this message via the contact form at seekinglife.blog:
          
          ${req.body.message}`,
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
