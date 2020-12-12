console.log("==================================================================");
console.log("                           MARK SHEET                             ");
console.log("==================================================================");
var marksheet ={ AP: "Applied Physics = 87", Calculus: "Calculus = 86",ENA: "Electrical Network Analysis = 84",English: "English =42", Cpls: "C++ = 76"}
var AP = 87
var Calculus = 86
var ENA= 84
var English= 42
var Cpls= 76
var obt = AP+Calculus+ENA+English+Cpls;
var percn= obt/450 *100;

for(key in marksheet){
    console.log(marksheet[key]);
} 
if (percn > 85)
console.log(" Your grade is A ",+percn)
else {
    console.log("==================================================================");
    console.log("your percentage is", percn)
    console.log("Your grade is B")
    console.log("==================================================================");
}


// console.log("==================================================================");
// console.log("                               DETAIL                             ");
// console.log("==================================================================");
// for(key in cvbio){
//     console.log(cvbio[key]);
// } 
