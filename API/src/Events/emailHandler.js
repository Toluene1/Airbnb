const mailer = require("../Config/Email");
const events = require("events");

const ev = new events.EventEmitter();
ev.on("mail", (message, email) => {
  mailer.sendMail(
    {
      subject: "Airbnb reg",
      from: "emekaseun.es@gmail.com",
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
