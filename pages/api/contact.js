const nodemailer = require("nodemailer");

export default function handler(req, res) {
  res.status(200).json({ status: 200 });

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "mail.gandi.net",
      port: "465",
      secure: "true",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: '"SEEKINGLIFE.BLOG" <donotreply@seekinglife.blog>',
    //   to: "geoff@rbcpc.org, luke@grahamwebworks.com",
      to: "luke@grahamwebworks.com",
      subject: "Contact Form Submission from seekinglife.blog",
      text: `${req.body.name} (${req.body.email}) just sent this message via the contact form at seekinglife.blog:
        
        ${req.body.message}`,
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages", success);
      }
    });
  }

  main().catch(console.error);
}
