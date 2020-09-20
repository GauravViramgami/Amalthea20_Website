var mongoose = require("mongoose"),
  express = require("express"),
  app = express(),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  GoogleStrategy = require('passport-google-oauth20').Strategy
// findOrCreate = require('mongoose-findorcreate')

mongoose.connect("mongodb://localhost/ABC", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride("_method"))

var user = require("./modules/user")

app.use(require("express-session")({
  secret: "Harshit",
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  user.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(function(req,res,next){
  res.locals.currentUser = req.user
  next()
})

passport.use(new GoogleStrategy({
    clientID: "135466675044-749r5mhebcd0rvbnf9se8rcumjmttk0k.apps.googleusercontent.com",
    clientSecret: "sd4H51v5zVEn_CRmnoxB8HfH",
    callbackURL: " https://pacific-caverns-51977.herokuapp.com/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function (accessToken, refreshToken, profile, cb) {

    user.findOne({
      email: profile.emails[0].value
    }, function (err, founduser) {

      if (err) {
        return cb(err);
      }
      if (!founduser) {
        console.log(profile)
        user.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          google: profile._json,
          googleID: profile.id
        }, function (err, user) {
          if (err) console.log(err);
          return cb(err, user);
        });
      } else {
        founduser.name= profile.displayName
        founduser.email= profile.emails[0].value
        founduser.username= profile.username
        founduser.google= profile._json
        founduser.googleID= profile.id
        founduser.save()
        return cb(err, founduser);
      }
    });
  }
));

var indexRoutes = require("./routes/index")
app.use("/", indexRoutes)

var eventsRoutes = require("./routes/events")
app.use("/events/", eventsRoutes)

// Server http://localhost:3000/
app.listen(process.env.PORT || 3000, function () {
  console.log("app is running...")
})
