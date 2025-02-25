"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(to, subject, content) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER, // generated ethereal user
      pass: process.env.GMAIL_KEY, // generated ethereal password
    },
  });

  const message = {
    from: `Taskify Mailer ${process.env.GMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line

    html: `
    <p>Password <b>${content}</b></p>
    <p>Contact administrator if something wrong: ${process.env.GMAIL_USER}</p>
    `,
  };

  // send mail with defined transport object
  await transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });
}

const nodeMailer = (to, subject, content) => {
  main(to, subject, content);
};

module.exports = {
  nodeMailer,
};
