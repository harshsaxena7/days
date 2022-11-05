const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
var items =[];
app.get("/", function (req,res)
{
    // res.send("this is  a to do list logic");
    var today= new Date();

var options ={
    weekday: "long",
    day:"numeric",
    month:"long"
};
var day = today.toLocaleDateString("en-US",options);

    res.render("list",{kindofDay :day ,newListItems :items});

});

app.post("/" , function(req,res)
{
      var item = req.body.newItem; 
    items.push(item);
    res.redirect("/");
});

app.listen(7000,function()
{
    console.log("server working at port 7000");
});