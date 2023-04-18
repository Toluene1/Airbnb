const nodemailer = require("nodemailer");
const path = require("path");
const { pugEngine } = require("nodemailer-pug-engine");
const { GMAIL_PASS, GMAIL_USER } = require("./config");

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

mailer.use(
  "compile",
  pugEngine({
    templateDir: path.join(__dirname, "../templates"),
    pretty: true,
  }),
);
module.exports = mailer;
