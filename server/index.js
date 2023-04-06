const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://nahedghali77:l3csSsRPDqoNuVek@cluster0.nlgarwc.mongodb.net/GestionRh?retryWrites=true&w=majority"
  )
  .then((value) => console.log("connected a la BD GestionRH"))
  .catch((errer) => console.log(errer));
const GestionRoute = require("./routes/GestionRoute");
const GestionModel = require("./models/GestionModel");

const port = 5000;
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
//
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/login");
  }
);

/* 
// Définition de la sérialisation et désérialisation de l'utilisateur
passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  // Remplacer cette fonction par une recherche d'utilisateur appropriée (par exemple, une recherche de base de données)
  if (username === 'john') {
    return done(null, { username: 'john' });
  } else {
    return done(new Error('User not found'));
  }
});*/
app.use(bodyParser.json());
app.use(cors());
app.get("/acceuil", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.use("/gestion", GestionRoute);
// GET request pour récupérer tous les utilisateurs
app.get("/users", async (req, res) => {
  const users = await GestionModel.find();
  res.json(users);
});
// POST request pour créer un nouvel utilisateur
app.post("/users", async (req, res) => {
  const newUser = new GestionModel(req.body);
  await newUser.save();
  res.json(newUser);
});
