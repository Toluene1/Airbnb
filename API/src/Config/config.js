require("dotenv").config();
const { MONGO_URL, PORT, CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET } = process.env;

module.exports = { MONGO_URL, PORT, CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET };
