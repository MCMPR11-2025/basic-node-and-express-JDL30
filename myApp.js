let express = require('express');
let app = express();
console.log("Hello World");


//app.use("/public",express.static(__dirname+"/public"));

//app.get("/",function(req, res) {
//  res.sendFile(__dirname + '/views/index.html')
//})
require('dotenv').config()

app.get("/json", function(req, res) {
    var response = "Hello json"
    if (process.env.MESSAGE_STYLE === "upppercase"){
        response = "Hello json".toUpperCase();
    }else{
        response = "Hello json";
    }
    res.json({
        "message": response
    });
});



































 module.exports = app;
