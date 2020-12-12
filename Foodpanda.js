console.log("============================================================")
console.log("                WELCOME TO FOODPANDA APPLICATION            ")
console.log("============================================================")
var readline=require('readline');
var takeInput=readline.createInterface(process.stdin,process.stdout)
console.log("============================================================")
console.log("                      Please login your Id                   ")
console.log("============================================================")
takeInput.question("Enter Your name:  ",function(b){
takeInput.question("Enter Your password:  ",function(x){
    var name= b;   
 var count=parseInt(x);
//  var balance=50000;
 
if (name== "Arslan"){
  if (count ==1234) {
    console.log("============================================================")
    console.log("                           FOOD MENUE                       ")
    console.log("============================================================")
    
    console.log("============================================================")
    console.log( " 1. CAKE     2. SWEETS \n 3. PIZZA   4. BURGER" );
    console.log("============================================================")
 } }
//    else if(name !== "Arslan"){
//     console.log("incorrect name")
//    }
     takeInput.question("Select your option:  ",function(choose){
    var val = parseInt(choose)
if (val==1){
    console.log("============================================================")
    console.log("                           SELECT FLAVOUR                   ")
    console.log("============================================================")
    console.log("============================================================")
    console.log( " 1. CHOCOLATE     2. STRAWBERRY \n 3. BANANA        4. RED VELVET" );
    console.log("============================================================")

}
     
    takeInput.question("Select flavour:  ",function(choose){
        var vaq = parseInt(choose)
    if (vaq==1){
        console.log("============================================================")
        console.log("                           SELECT SIZE                      ")
        console.log("============================================================")
        console.log("============================================================")
        console.log( " 1. 1-pound     2. 2-pound \n 3. 2.5-pound   4. 3-pound" );
        console.log("============================================================")
    
    }
        takeInput.question("Select size:  ",function(choose){
            var vas = parseInt(choose)
        if (vas==1){
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            console.log("      Dear customer the price of 1-pound cake is 650/Rs.           ")
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        
            takeInput.question("Do you want to order ? Yes / No, \n  1. Yes 2. No",function(choose){
                var vas = parseInt(choose)
            if (vas==1){
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                console.log("Dear Customer, your order has been confirmed.\n you'll recieved your order within an hour \n\n  Thank you for using Foodpanda App  ")
                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                takeInput.close()
            }
            
            else if(vas==2){
            console.log("============================================================")
            console.log("              Thank you for using Foodpanda App             ")
            console.log("============================================================")
            takeInput.close()
            }
        })}})

            takeInput.question("Select your option:  ",function(choose){
                var vas = parseInt(choose)
            if (vas==2){
                console.log("============================================================")
                console.log("                 Dear customer the price                   ")
                console.log("============================================================")

            }})

        })
    })

})})

// Still woking on this.....