let express = require('express');
let app = express();
console.log("Hello World");


//app.use("/public",express.static(__dirname+"/public"));

//app.get("/",function(req, res) {
//  res.sendFile(__dirname + '/views/index.html')
//})
require('dotenv').config()

var timemid = function(req, res, next){
    req.time = new Date().toString();
    next();
};
app.get("/now", timemid, function(req,res){res.send({time: req.time})})

var response = "Hello json";
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = "Hello json".toUpperCase();
    }else{
        response = "Hello json";
    }
    res.json({
        "message": response
    });
});


































 module.exports = app;
