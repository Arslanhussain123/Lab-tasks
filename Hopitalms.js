console.log("=============================================================")
console.log("                    HOSPITAL MANAGMET SYSTEM                 ")
console.log("=============================================================")
class Hospms{
constructor(P_name, fname, Mr_no, Date,Time, p_ward, P_ill_array, Dr_name_field_array, bar_code){
    this.P_name=P_name;
    this.fname=fname;
    this.Mr_no=Mr_no;
    this.Date=Date;
    this.Time=Time;
    this.p_ward=p_ward;
    this.P_ill_array=P_ill_array;
    this.Dr_name_field_array=Dr_name_field_array;
    this.bar_code=bar_code;
    
}
get P_name(){
    return this._P_name;
}
set P_name(value){
    this._P_name=value
}


get fname(){
    return this._fname;
}
set fname(value){
    this._fname=value
}


get Mr_no(){
    return this._Mr_no;
}
set Mr_no(value){
    this._Mr_no=value
}


get Date(){
    return this._Date;
}
set Date(value){
    this._Date=value
}


get Time(){
    return this._Time;
}
set Time(value){
    this.Time=value
}


get p_ward(){
    return this._p_ward;
}
set p_ward(value){
    this._p_ward=value
}

get P_ill_array(){
    return this._P_ill_array;
}
set P_ill_array(value){
    this._P_ill_array=value
}


get Dr_name_field_arrayh(){
    return this._Dr_name_field_array;

}
set Dr_name_field_array(value){
    this._Dr_name_field_array=value
}


get bar_code(){
    return this._bar_code;
}
set bar_code(value){
    this._bar_code=value
}
}
Patient_ill_array= [Fever, Flue, Bp]
Dr_name =[]
let hospms=new Hospms("Name:               Arslan","Father Name:             Muhammad Hussain","Mr number:           09","Date:         27 Nov,2020", "Time:   8:30", "Patient ward :          Ward B" , "Patient ill array:       50000", "Monthly Fees::        30000  ","Extraciculum Fees::   10000","Game Fees::           15000", "English Status:  Pass / Fail", "Physics Status:  Pass / Fail" );

console.log(hospms.P_name);
console.log(hospms.fname);
console.log(hospms.Mr_no);
console.log(hospms.lclass);
console.log(hospms.lpassingmarks);
console.log(hospms.rollno);

// console.log("=============================================================")
// console.log("                          ADMISSION FEES                     ")
// console.log("=============================================================")

// console.log(schoolms.admissionfees);
// console.log(schoolms.monthlyfees);
// console.log(schoolms.extraciculumfees);
// console.log(schoolms.gamefees);

// console.log("=============================================================")
// console.log("                       MARKS OBTAINED PART                   ")
// console.log("=============================================================")

// console.log(schoolms.english);
// console.log(schoolms.physics);