var express = require("express")
var router = express.Router()
var request = require("request")
var passport = require("passport")
var user = require("../modules/user")

router.get("/", function (req, res) {
  // request("https://script.google.com/macros/s/AKfycbw9eMmloCk_QMNosdqDJ3iPbTrR57W_fQFZPE6nsjnvUGkbNRk/exec", function(err, response, body){

  // var events = body.split("&&&&***&&&&");

  //   for(var i=0; i<events.length; i++)
  //   {
  //     events[i]=events[i].split("&&&**&&&");
  //   }
  //   // res.send(events)
  //   res.render("index",{events:events})
  // })

  res.render("index")

})

router.get("/CampusAmbassador", function (req, res) {

  res.render("CampusAmbassador/index")

})

router.get("/registrationCA", function (req, res) {

  res.render("CampusAmbassador/registration/index")

})

router.get("/events", function (req, res) {
  let event = req.query.event;
  if (event != "cryptorush" && event != "gamejam" && event != "dcode" && event != "icon" && event != "cryptix" && event != "quickwit" && event != "autodesk") {
    event = "autodesk";
  }
  res.render("events", {event: event})

})

// router.get("/cryptorush_form", function (req, res) {
//   let ref = req.query.ref;
//   if (ref === undefined) {
//     ref = -1;
//   } else {
//     ref = ref.toString();
//     if (ref.length === 3 && ref.substring(0,1) === "0" && ref.substring(1,2) != "0") {
//       ref = ref.substring(1,4);
//     }
//   }
//   res.render("cryptorush_form", {ref: ref})

// })

router.get("/autodesk_form", function (req, res) {
  let ref = req.query.ref;
  if (ref === undefined) {
    ref = -1;
  } else {
    ref = ref.toString();
    if (ref.length === 3 && ref.substring(0,1) === "0" && ref.substring(1,2) != "0") {
      ref = ref.substring(1,4);
    }
  }
  res.render("autodesk_form", {ref: ref})

})

router.get("/icon_form", function (req, res) {
  let ref = req.query.ref;
  if (ref === undefined) {
    ref = -1;
  } else {
    ref = ref.toString();
    if (ref.length === 3 && ref.substring(0,1) === "0" && ref.substring(1,2) != "0") {
      ref = ref.substring(1,4);
    }
  }
  res.render("icon_form", {ref: ref})

})

router.get("/aiche_form", function (req, res) {
  let ref = req.query.ref;
  if (ref === undefined) {
    ref = -1;
  } else {
    ref = ref.toString();
    if (ref.length === 3 && ref.substring(0,1) === "0" && ref.substring(1,2) != "0") {
      ref = ref.substring(1,4);
    }
  }
  res.render("aiche_form", {ref: ref})

})


router.get("/contact", function (req, res) {

  res.render("contact")

})

router.get("/symposium", function (req, res) {

  res.render("symposium")

})

// router.get("/symposium_form", function(req, res) {

//   res.render("symposium_form")

// })

router.get("/amalthea_project", function (req, res) {

  res.render("amalthea_project")

})

router.get("/past_sites", function (req, res) {

  res.render("past_sites")

})

router.get("/webinars", function (req, res) {

  res.render("webinars")

})

// router.get("/webinar_form", function (req, res) {
//   let ref = req.query.ref;
//   if (ref === undefined) {
//     ref = -1;
//   } else {
//     ref = ref.toString();
//     if (ref.length === 3 && ref.substring(0,1) === "0" && ref.substring(1,2) != "0") {
//       ref = ref.substring(1,4);
//     }
//   }
//   res.render("webinar_form", {ref: ref})

// })

router.get("/sponsors", function (req, res) {

  res.render("sponsors")

})


router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email']
  }));

router.get('/auth/google/secrets',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/caLeaderboard');
  });

router.get("/logout",function(req,res){
    req.logout()
    res.redirect("/")
})

router.get("/caLeaderboard", function(req, res) {
  res.render("caLeaderboard");
})

router.get("/dashboard",isLogedIn, function(req,res){
  var register=[];
  request("https://script.google.com/macros/s/AKfycbw9eMmloCk_QMNosdqDJ3iPbTrR57W_fQFZPE6nsjnvUGkbNRk/exec", function(err, response, body){

  var events = body.split("&&&&***&&&&");

    for(var i=0; i<events.length; i++)
    {
      events[i]=events[i].split("&&&**&&&");
    }
    // res.send(events)
    for(var i=0; i<events.length; i++)
    {
      if (events[i][4]!="-"){

        request(events[i][4], function(err, response2, body2){
          var members = body2.split("&&&&***&&&&")

          for(var j=0; j<members.length; j++)
          {
            members[j]=members[j].split("&&&**&&&");

            if(members[j][0]==req.user.email)
            {

              register.push(members[j][6])

              break
            }
          }
          // res.send(register)
          var data=[]
          var nameOfEvents=[]
          for(var i=0; i<events.length; i++)
          {
            nameOfEvents.push(events[i][0])


          }
          for(var j=0; j<register.length; j++)
          {
            data.push(events[nameOfEvents.indexOf(register[j])])
          }
          // res.send(data)
          res.render("dashboard",{data:data})
      })



    }
  }
})
})

function isLogedIn(req,res,next){
  if(req.isAuthenticated()){
      return next()
  }else{
      res.redirect("/auth/google")
  }
}


module.exports = router
