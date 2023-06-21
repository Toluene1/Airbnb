const { Router } = require("express");
const GoogleAuth = require("../Controllers/Auth2controller");

const router = Router();

router.post("/Oauth/google", GoogleAuth);
module.exports = router;
