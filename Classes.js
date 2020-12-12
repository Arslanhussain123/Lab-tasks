class SMS{
    constructor(name, fname, ID_no,Class,lclass,lpassingmarks,rollno,admissionfees,monthlyfees,extraciculumfees,gamefees, english,physics){
    this.name=name;
    this.fname=fname;
    this.Class=Class;
    this.lclass=lclass;
    this.lpassingmarks=lpassingmarks;
    this.rollno=rollno;
    this.admissionfees=admissionfees;
    this.monthlyfees=monthlyfees;
    this.extraciculumfees=extraciculumfees;
    this.gamefees=gamefees;
    this.english=english;
    this.physics=physics;
}
get name(){
    return this._name;

}
set name(value){
    this._name=value
}
get fname(){
    return this._fname;

}
set fname(value){
    this._fname=value

}
get Class(){
    return this._Class;

}
set Class(value){
    this._Class=value
}

get lclass(){
    return this._lclass;

}
set lclass(value){
    this._lclass=value
}
get lpassingmarks(){
    return this._lpassingmarks;

}
set lpassingmarks(value){
    this._lpassingmarks=value
}
get rollno(){
    return this._rollno;

}
set rollno(value){
    this._rollno=value
}}
class admreq extends SMS{

}


