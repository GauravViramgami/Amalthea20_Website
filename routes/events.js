var express = require("express")
var router = express.Router()
var request = require("request")
var passport = require("passport")
var user = require("../modules/user")

router.get('/cryptorush',function(req,res){
    res.render("events/cryptorush")
});

router.get('/cryptix',function(req,res){
    res.render("events/cryptix")
});


router.get('/dcode',function(req,res){
    res.render("events/dcode")
});


router.get('/electronica',function(req,res){
    res.render("events/electronica")
});

router.get('/quickwit',function(req,res){
    res.render("events/quickwit")
});



module.exports = router