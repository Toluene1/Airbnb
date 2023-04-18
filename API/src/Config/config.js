require("dotenv").config();
const {
  MONGO_URL,
  PORT,
  CLOUD_NAME,
  CLOUD_KEY,
  CLOUD_SECRET,
  GMAIL_PASS,
  GMAIL_USER,
} = process.env;

module.exports = {
  MONGO_URL,
  PORT,
  CLOUD_NAME,
  CLOUD_KEY,
  CLOUD_SECRET,
  GMAIL_PASS,
  GMAIL_USER,
};
