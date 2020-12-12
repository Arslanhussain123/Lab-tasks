class CV{
    constructor(Calculus,English,Applied_physics,Network_analysis,C_pls_pls,total_marks){
    this.Calculus=Calculus;
    this.English=English;
    this.Applied_physics=Applied_physics;
    this.Network_analysis=Network_analysis;
    this.C_pls_pls=C_pls_pls;
    this.total_marks=total_marks;
    
}
// get gname(){
// return this.name;
// }
// set sname(val) {
//     this.name=val;
    
//    }
//    set slsname(val){
//        return this.lsname=val
//    }
//    get glsname(){
//        return this.lsname
//    }
   get marksheet(){
       console.log('************************Mark sheet******************')
       return this.Calculus+"\n"+ this.English+"\n"+this.Applied_physics+"\n"+this.Network_analysis+"\n"+this.C_pls_pls+"\n"+this.total_marks
   }
   }
   let user=new CV("Calculus = 86", "Functional English= 43","Applied_physics= 87","Electrical Network Analysis= 82","C++ = 76 ","Total Marks =374");
  
   console.log(user.marksheet);