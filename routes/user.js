const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {isLoggedIn,saveRedirectUrl}=require("../authMiddleware.js");


const usersController = require("../controllers/users.js");

router.route("/signup")
    .get(usersController.renderSignUpForm)
    .post(wrapAsync(usersController.signUp));

router.route("/login")
    .get(usersController.renderLoginForm)
    .post(
    saveRedirectUrl, 
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true, 
    }),
    usersController.login
);

router.get("/logout",usersController.logout);
module.exports = router;


// router.get("/signup", usersController.renderSignUpForm);

// router.post("/signup", wrapAsync(usersController.signUp));

// router.get("/login", usersController.renderLoginForm);

// router.post(
//     "/login",
//     saveRedirectUrl, 
//     passport.authenticate("local", { 
//         failureRedirect: "/login", 
//         failureFlash: true, 
//     }),
//     usersController.login
// );

