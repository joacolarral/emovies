const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const session = require("express-session"); // req.session || https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm
const cookieParser = require("cookie-parser"); // req.cookies
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const routes = require("./routes/index");
const db = require("./config/db");
const User = require("./models/User");
const app = express();

app.set("view engine", "html"); // que extensiones de archivo tienen los templates

// logging middleware
app.use(volleyball);
// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // para HTML form submits
app.use(bodyParser.json()); // seria para AJAX requests
app.use(cookieParser()); // req.cookies

app.use(session({ secret: "bootcamp" })); // req.session // The secret is used to sign the session id cookie, to prevent the cookie to be tampered with.

/* ------------ PASSPORT -----------*/
// Passport Flow: http://toon.io/understanding-passportjs-authentication-flow/

// passport init and session connection
app.use(passport.initialize());
app.use(passport.session()); // Express stuffs the id of the session object into a cookie on the client's browser, which gets passed back to express in a header on every request. This is how Express identifies multiple requests as belonging to a single session even if the user is not logged in.

// auth strategy definition | localstrategy | http://www.passportjs.org/packages/passport-local/
passport.use(
  new LocalStrategy(
    {
      usernameField: "username", // input name for username
      passwordField: "password" // input name for password
    },
    function(inputUsername, inputPassword, done) {
      User.findOne({ where: { username: inputUsername } }) // searching for the User
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validPassword(inputPassword)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user); // the user is authenticated ok!! pass user to the next middleware in req object (req.user)
        })
        .catch(done); // this is returning done(error)
    }
  )
);

// serialize: how we save the user and stored in session object by express-session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// deserialize: how we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => done(null, user));
});

/* ------------ PASSPORT -----------*/

// rutas modulares
app.use("/api", require("./routes"));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(404).send(err);
});

console.log("escuchando el puerto 3000");
db.sync({ force: false })
  .then(con => {
    // force: true adds a DROP TABLE IF EXISTS before trying to create the table - if you force, existing tables will be overwritten.
    console.log(
      `dialect: ${con.options.dialect}, database: ${con.config.database}, connected at ${con.config.host}:${con.config.port}`
    );
    app.listen(3000, () => console.log("SERVER LISTENING AT PORT 3000"));
  })
  .catch(console.log);
