class Marksheet {

    constructor (name, fname,ID, department, calculus,English,applied_physics,network_analysis, clanguage)
 
{
this._name=name;
this._fname=fname;
this.ID=ID;
this.department=department;
this.calculus=calculus;
this.English=English;
this.applied_physics=applied_physics;
this.network_analysis=network_analysis;
this.clanguage=clanguage;
}
set name(val){
    this._name=val;
}
get name(){
    return this._name;
}

set fname(val){
    this._fname=val;
}
get fname(){
    return this._fname
}

set ID(val){
    this._ID=val;
}
get ID(){
    return this._ID
}


get department(){
    return this._department
}

set department(val){
    this._department=val;
}
get department(){
    return this._department
}


}
let marksheet= new Marksheet("Name:              Arslan","Father name:       Muhammad hussain","ID#:               2019","Department:        Energy System Engineering", "Calculus ="+76  );
console.log(marksheet.name);
console.log(marksheet.fname);
console.log(marksheet.ID);
console.log(marksheet.department);

console.log("====================================================================================")
console.log("                              MRKS SHEET OF 1ST SEMESTER                            ")
console.log("====================================================================================")
console.log(marksheet.calculus);