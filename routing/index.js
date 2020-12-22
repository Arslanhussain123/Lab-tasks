const express=require('express');
const app=express();
const port= 3000;

app.use(function(req,res,next){
    console.log("Welcome");
    next();
});

app.get('/',function(req,res,next){
    res.send("Arslan hussain");
    next();
});
app.get('/Home',function(req,res,next){
console.log("Student")
res.send("Student");
next();
});
app.get('/Home/About',function(req,res){
    console.log("Blockchain")
    res.send("Blockchain");
    }) ; 
app.listen(port);