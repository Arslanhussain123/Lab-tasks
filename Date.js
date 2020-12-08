// var date = new Date();
// date.setDate(15);
// console.log(date)

// var year = new Date();
// year.setFullYear(2021);
// console.log(year)

// var hour = new Date();
// hour.setHours(15);
// console.log(hour);

// var month = new Date();
// month.setMonth(4);
// console.log(month)




var today= new Date();
var yearday= today.getFullYear()+" , "+today.getMonth();
var time= today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
var T = today.getHours()
var mont = today.getMonth()


if (T >= 12){
    console.log("PM",time)

}
else
console.log("AM",time);
var readline=require('readline');
var takeInput=readline.createInterface(process.stdin,process.stdout)
takeInput.question("Enter your Birthday month ",function(value1){
    var val1 = parseInt(value1);
   

if (val1 == mont){
    console.log("It's your Birthday month")
}
else
console.log("It's not your Birthday month")
console.log(yearday)
takeInput.close()
})
