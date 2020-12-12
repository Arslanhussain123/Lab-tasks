// var readline = require('readline')
var SMS= [
    {id: 10010, Name: "Arslan", School: "L.F.H.S.S", Class: 8, Section: "A"},
    {id: 10020, Name: "Zakir", School: "L.F.H.S.S", Class: 8, Section: "A"},
    {id: 10030, Name: "Zohaib", School: "L.F.H.S.S", Class: 8, Section: "A"},
    {id: 10040, Name: "Faizan", School: "L.F.H.S.S", Class: 8, Section: "A"}
]
var readline = require('readline')
var takeInput = readline.createInterface(process.stdin, process.stdout) 
var a=takeInput.question("Enter the Name or ID of Student :", function(name){
    var c = name
    var b = parseInt(name)
    console.log(b);
    SMS.map(function(val1){
        switch (val1.id){
            case b :
            console.log(val1);
            takeInput.close();

            
            default :
            break
        }
        switch (val1.Name){
            case c :
            console.log(val1);
            takeInput.close();

            
            default :
            break
        }

    })
} )


 
// // var x="Arslan"

  
//     var readline = require('readline')
// var takeInput = readline.createInterface(process.stdin, process.stdout)

// takeInput.question("enter the name " , function(choose){

//     if(choose == Arslan){

//         var result=SMS.find(school => school.Name===x);
//         // console.log(result);

//     console.log(": " + result);
//     takeInput.close();
    
//     }
//     })