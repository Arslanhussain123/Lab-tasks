class lms {
    constructor(usid,name,fname,clas,uniid){
        this.name = name
        this.fname = fname
        this.clas = clas
        this.usid = usid
        this.uniid = uniid
    }
 
set _name (value){this.name = value}
get _name(){return this.name}

set _fname (value){this.fname = value}
get _fname(){return this.fname}

set _clas (value){this.clas = value}
get _clas(){ return this.clas}

set _usid (value){this.usid = value}
get _usid(){ return this.usid}

set _uniid (value){this.uniid = value}
get _uniid(){ return this.uniid}
}

class adm {
    constructor(sub,A_phy,Calc,NA,Eng){
        this.A_phy = A_phy
        this.Calc = Calc
        this.NA = NA
        this.Eng = Eng
        this.sub=sub
     
    }


get _sub (){ return this.sub}


get _A_phy (){ return this.A_phy}


get _Calc (){ return this.Cals}


get _NA(){ return this.NA}


get _Eng(){ return this.Eng}

lop(){
for (var i=0; i<10 ;i++){
    console.log(`${this.A_phy[i]}                ${this.Calc[i]}               ${this._NA[i]}                      ${this._Eng[i]}`);
}}
}

var lcms = new lms(3030,"Arslan Hussain","Muhammad hussain",12,"MUET")
var subs   = ["Applied Physics","Calculus","Electrical Neetwork Analysis","English"]
var AAphys = ["Book 1","Book 2","Book 3","Book 4","Book 5","Book 6","Book 7","Book 8","Book 9","Book10"];
var Calcc  = ["Book 1","Book 2","Book 3","Book 4","Book 5","Book 6","Book 7","Book 8","Book 9","Book10"];
var ENA    = ["Book 1","Book 2","Book 3","Book 4","Book 5","Book 6","Book 7","Book 8","Book 9","Book10"];
var Engl   = ["Book 1","Book 2","Book 3","Book 4","Book 5","Book 6","Book 7","Book 8","Book 9","Book10"];

var bks = new adm(subs,AAphys,Calcc,ENA,Engl)


console.log(` 
===============================================================================
                            Library Management System
=============================================================================== 
User Id            : ${lcms.usid}
Name               : ${lcms._name}
Father Name        : ${lcms._fname}
Class              : ${lcms._clas}
University Id      : ${lcms._uniid}
=============================================================================== 
                                    Subjects   
=============================================================================== 
${bks._sub[0]}      ${bks._sub[1]}     ${bks._sub[2]}        ${bks._sub[3]}
=============================================================================== 
 `)
bks.lop()