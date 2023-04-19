const mailer = require("../Config/Email");
const events = require("events");
const { GMAIL_USER } = require("../Config/config");

const ev = new events.EventEmitter();
ev.on("mail", (message, email) => {
  mailer.sendMail(
    {
      subject: "Airbnb reg",
      from: GMAIL_USER,
      to: email,
      template: "register",
      ctx: {
        message,
      },
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent" + info.response);
      }
    },
  );
});
module.exports = ev;
