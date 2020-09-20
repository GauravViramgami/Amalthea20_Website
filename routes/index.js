var express = require("express")
var router = express.Router()
var request = require("request")
var passport = require("passport")
var user = require("../modules/user")

router.get("/", function (req, res) {
  request("https://script.google.com/macros/s/AKfycbw9eMmloCk_QMNosdqDJ3iPbTrR57W_fQFZPE6nsjnvUGkbNRk/exec", function(err, response, body){

  var events = body.split("&&&&***&&&&");

    for(var i=0; i<events.length; i++)
    {
      events[i]=events[i].split("&&&**&&&");
    }
    // res.send(events)
    res.render("index",{events:events})
  })
  
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
    res.redirect('/Dashboard');
  });

router.get("/logout",function(req,res){
    req.logout()
    res.redirect("/")
})

router.get("/Dashboard",isLogedIn, function(req,res){
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