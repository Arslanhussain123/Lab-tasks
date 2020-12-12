console.log("============================================================================")
console.log("                              SCHOOL MANAGEMENT SYSTEM                      ")
console.log("============================================================================")
class sms {
    constructor(name,fname,clas,lclass,lpssmrks,rolno,admsnfees,mnthfees,exfes,gmfees,engsub,engmrk,phsub,phmrk){
        this.name = name
        this.fname = fname
        this.clas = clas
        this.lclass = lclass
        this.lpssmrks = lpssmrks 
        this.rolno = rolno
        this.admsnfees = admsnfees
        this.mnthfees = mnthfees
        this.exfes = exfes
        this.gmfees = gmfees
        this.engmrk = engmrk
        this.phmrk = phmrk
        this.engsub = engsub
        this.phsub = phsub
    }
set _name (value){this.name = value}
get _name(){ return this.name}

set _fname (value){this.fname = value}
get _fname(){ return this.fname}

set _clas (value){this.clas = value}
get _clas(){ return this.clas}

set _lclass (value){this.lclass = value}
get _lclass(){ return this.lclass}

set _lpmrks (value){this.lpmrks = value}
get _lpmrks(){ return this.lpmrks}

set _rolno (value){this.rolno = value}
get _rolno(){ return this.rolno}

}

class adm extends sms {

set _admsnfees (value){this.admsnfees = value}
get _admsnfees(){ return this.admsnfees}

set _mnthfees (value){this.mnthfees = value}
get _mnthfees(){ return this.mnthfees}

set _exfes (value){this.exfes = value}
get _exfes(){ return this.exfes}

set _gmfees (value){this.gmfees = value}
get _gmfees(){ return this.gmfees}

}

class mrks extends adm{

set _engnm(value){this.engsub = value}
get _engnm(){ return this.engsub}

set _engsub(value){this.engmrk = value}
get _engsub(){ return this.engmrk}

set _phnm(value){this.phsub = value}
get _phnm(){return this.phsub}

set _phmrk(value){this.phmrk = value}
get _phmrk(){return this.phmrk}

if (val){
    return (val>50)? "Pass" : "Fail";
}
}

var dtil = new mrks("Arslan","Muhammad Hussain",10,12,86,6000,10000,50000,6000,7000,"Physics",40,"English",77)

console.log(` 
============================================================================
                                 STUDENT DETAIL
============================================================================
Name               : ${dtil._name}
Father Name        : ${dtil._fname}
Class              : ${dtil._clas}
Last Class         : ${dtil._lclass}
Last Passing Marks : ${dtil._lpssmrks}
Roll No.           : ${dtil._rolno}
=============================================================================
                                  SCHOOL FEES
============================================================================= 
Admission Fees      : ${dtil._admsnfees}
Monthly Fess        : ${dtil._mnthfees}
Extracuricular Fees : ${dtil._exfes}
Game Fees           : ${dtil._gmfees}
============================================================================= 
${dtil._engnm}        : ${dtil._engsub} ${dtil.if(23)}
${dtil._phnm}        : ${dtil._phmrk} ${dtil.if(67)}`)