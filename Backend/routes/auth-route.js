const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth-controller");

//route for register user
router.route("/register").post(registerUser);

//route for login user
router.route("/login").post(loginUser);

module.exports = router;
