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
  var register=[];
  request("https://script.google.com/macros/s/AKfycbw9eMmloCk_QMNosdqDJ3iPbTrR57W_fQFZPE6nsjnvUGkbNRk/exec", function(err, response, body){
    var events = body.split("&&&&***&&&&");
    for(var i=0; i<events.length; i++)
    {
      events[i]=events[i].split("&&&**&&&");
    }
    
    for(var i=0; i<events.length; i++)
    {
      if (events[i][5]!="-"){
        console.log(i,0)
        request(events[i][5], function(err, response2, body2){
          var members = body2.split("&&&&***&&&&")
          console.log(i,1)
          for(var j=0; j<members.length; j++)
          {console.log(i,2)
            members[j]=members[j].split("&&&**&&&");
            
            if(members[j][0]==req.user.email)
            {
              register.push(events[i])
              console.log(i,3)
              break
            }            
          }          
          
          console.log(register)
          res.render("dashboard")
      })
      
    }
  }
})
})

module.exports = router