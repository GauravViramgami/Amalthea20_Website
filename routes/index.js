var express = require("express")
var router = express.Router()
var request = require("request")
var passport = require("passport")
var user = require("../modules/user")

router.get("/", function (req, res) {
  res.render("index")
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
    res.redirect('/');
  });

router.get("/logout",function(req,res){
    req.logout()
    res.redirect("/")
})

router.get("/Dashboard", function(req,res){
  var register = [];
  request("https://script.google.com/macros/s/AKfycbw9eMmloCk_QMNosdqDJ3iPbTrR57W_fQFZPE6nsjnvUGkbNRk/exec", async function(err, response, body){
    var events = body.split("&&&&***&&&&");
    var eventsArr = [];
    for(var k=0; k<events.length; k++)
    {
      eventsArr.push(events[k].split("&&&**&&&"));
      //events[i]=events[i].split("&&&**&&&");
    }

    for(var i=0; i<eventsArr.length; i++)
    {
      if (eventsArr[i][5]!="-"){
        await request(eventsArr[i][5], function(err, response2, body2){
          var members = body2.split("&&&&***&&&&");
          var membersArr = [];
          for(var j=0; j<members.length; j++)
          {
            membersArr.push(members[j].split("&&&**&&&"));
            //members[j]=members[j].split("&&&**&&&");
            if(membersArr[j][0] == req.user.email)
            {
              console.log(i);
              register.push(eventsArr[i]);
              break;
            }
          }
      });

    }
  }
  res.render("dashboard");
});
});

module.exports = router
