const express = require('express') 
const app = express(); 
const port = 5000; 
 
app.use(login)

app.get('/home', (req, res) => { 
    console.log("homepage")
    res.sendFile("D:/Block chain/Web/113.html") 
    // res.send('Hello World!') 
}); 

app.get('/home/about',(req, res) =>{
    res.send("Welcome to the about page")
});
var a= [{name : "Ahmed",
       dept: " computer sciencec"}]
app.get('/home/about/registration',(req,res)=>{
    res.send(a)
//    
}); 
app.get('/home/about/registration/image', (req, res) => { 
    console.log("homepage")  
    res.sendFile("D:/Block chain/Web/im.html") 
}); 

function login(req, res, next){
    console.log("login successful")
    next()
}

 
app.listen(port, () => {   
    console.log(`Example app listening on port ${port}!`) 
});
// app.listen(5000);