const express = require("express");
const passport = require("passport");

const User = require("../models/User");
const Favourite = require("../models/Favourite");

const router = express.Router();

router.get("/me", (req, res) => {
  console.log("---------------------------");
  console.log("req.session: ", req.session); // express-session
  console.log("req.sessionID: ", req.sessionID); // express-session
  console.log("req.cookies: ", req.cookies); // cookie-parser
  console.log("req.user:", req.user);
  console.log("---------------------------");
  res.send(req.user);
});

router.get("/favs", function(req, res, next) {
  Favourite.findAll({ where: { userId: req.user.id } }).then(favs =>
    res.send(favs)
  );
});

router.post("/createaccount", function(req, res, next) {
  User.create(req.body)
    .then(user => {
      passport.authenticate("local", function(err, user, info) {
        if (!user) {
          return res.send(false);
        }
        req.logIn(user, function(err) {
          if (err) {
            return res.send(false);
          }
        });
        return res.status(201).send(req.user);
      })(req, res, next);
    })
    .catch(console.error);
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", function(err, user, info) {
    if (!user) {
      return res.send(false);
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.send(false);
      }
    });
    return res.send(req.user);
  })(req, res, next);
});

router.post("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/movies/:movieId", function(req, res) {
  Favourite.create({
    imdbID: req.body.imdbID,
    Title: req.body.Title,
    Poster: req.body.Poster
  })
    .then(newFav => newFav.setUser(req.user))
    .then(fav => res.status(201).send(fav));
});

router.post("/favs", function(req, res) {
  console.log(req.body);
  Favourite.destroy({
    where: {
      id: req.body.id
    }
  }).then(res.status(200));
});

/* router.post("/login", passport.authenticate("local"), (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send(false);
  }
}); */

module.exports = router;
