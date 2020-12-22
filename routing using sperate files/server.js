const express=require('express');
const app=express();
const port=3000;


const Home=require('./Home')
app.get("/Home",Home)

const About=require('./About')
app.get("/About",About)

const contact=require('./contact')
app.get("/contact",contact)

app.get("/",(req,res)=>{
    res.send("Express server started..")

})
app.listen(port,()=>{
console.log("Express server on port",port)
})