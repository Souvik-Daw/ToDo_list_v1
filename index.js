const express=require("express");
const bp=require("body-parser");
const bodyParser = require("body-parser");

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=[];
var item="";

app.get("/",function(req,res){
    var today=new Date();
    //var currentDate=today.getDay();
    var date="";
    var option={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    date=today.toLocaleDateString("en-US",option);
    res.render("list",{
       date:date,
       items:items 
    });
});

app.post("/",function(req,res){
    item=req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("The server is running");
})