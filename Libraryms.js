console.log("=============================================================")
console.log("                  LIBRARY MANAGEMENT SYSTEM                  ")
console.log("=============================================================")
class Libms{
constructor(AP,Calc,Eng,NA){
  
    this._AP=AP;
    this._Calc=Calc;
    this._Eng=Eng;
    this._NA=NA;
    
}
get user_ID(){
    return this._user_ID;

}
set user_ID(value){
    this._user_ID=value
}


get user_name(){
    return this._user_name;
}
set user_name(value){
    this._user_name=value
}


get fname(){
    return this._fname;
}
set fname(value){
    this._fname=value
}


get semester(){
    return this._semester;
}
set semester(value){
    this._semester=value
}


get Uni_ID(){
    return this._Uni_ID;

}
set Uni_ID(value){
    this._Uni_ID=value
}

// get AP(){
//     return this._AP;

// }
// set AP(value){
//     this._AP=value
// }


set Calc(value){
    this._Calc=value
}
get Calc(){
    return this._Calc;
}



set Eng(value){
    this._Eng=value
}
get Eng(){
    return this._Eng;
}



lop(){
    for (var i=0; i<10; i++){
        console.log(this.Calc[i])
    }
}}
let libms=new Libms(Applied_Physics,Calculus,English,Network_analysis );
var sub= ["Applied Physics", "Calculus", "English", "Network Analysis"]
var Applied_Physics= ["Book1","Book2","Book3","Book4","Book5","Book6","Book7","Book8","Book9","Book10"]
var Calculus= ["Book1","Book2","Book3","Book4","Book5","Book6","Book7","Book8","Book9","Book10"]
var English= ["Book1","Book2","Book3","Book4","Book5","Book6","Book7","Book8","Book9","Book10"]
var Network_analysis= ["Book1","Book2","Book3","Book4","Book5","Book6","Book7","Book8","Book9","Book10"]



console.log(libms.user_ID);
console.log(libms.user_name);
console.log(libms.fname);
console.log(libms.semester);
console.log(libms.Uni_ID);


console.log("=============================================================")
console.log("                                              ")
console.log("=============================================================")

libms.lop();



// console.log(schoolms.admissionfees);
// console.log(schoolms.monthlyfees);
// console.log(schoolms.extraciculumfees);
// console.log(schoolms.gamefees);

