const mailer = require("../Config/email");
const events = require("events");

const ev = new events.EventEmitter();
ev.on("mail", (message, email) => {
  mailer.sendMail({
    subject: "Airbnb reg",
    from: "info@AirBnb.com",
    to: email,
    template: "register",
    ctx: {
      message,
    },
  });
});
module.exports = ev;
