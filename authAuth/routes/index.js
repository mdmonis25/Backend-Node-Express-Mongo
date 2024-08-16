var express = require("express");
const userModel = require("./users");
const passport = require("passport");
var router = express.Router();
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/profile",isLoggedIn, function (req, res) {
  res.render("profile");
});

// regsiter user
router.post("/register", (req, res) => {
  let userData = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });
  userModel
    .register(userData, req.body.password)
    .then(function (regsiteredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});

//login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

//logout
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
