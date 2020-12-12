  console.log("==========================================================")
  console.log("                             CV                           ")
  console.log("==========================================================")
  class CV{
     constructor(name,lsname,fname,CNIC,Mob,email,qualification,job,experience,field, filedofintrest){
     this.name=name;
     this.lsname=lsname;
     this.fname=fname;
     this.CNIC=CNIC;
     this.Mob=Mob;
     this.email=email;
     this.qualification=qualification;
     this.job=job;
     this.experience=experience;
     this.field=field;
     this.filedofintrest=filedofintrest;

 }
//  get gname(){
// return this.name;
//  }
//  set sname(val) {
//      this.name=val;
     
//     }
//     set slsname(val){
//         return this.lsname=val
//     }
//     get glsname(){
//         return this.lsname
    // }
    get fullName(){
        console.log('inside getter')
        return this.name+" "+ this.lsname+"\n"+this.fname+"\n "+this.Mob+"\n"+this.CNIC+"\n" +this.email+"\n"
    }

    get bio(){
        // console.log('inside getter')
        return this.job+"\n" +this.experience+"\n" +this.field+"\n" +this.filedofintrest+"\n"
    }
    }
    let user=new CV("Name= Arslan", "Hussain","Father name= Muhmmad hussain" ,"CNIC= 45263532647","Mobile no= 242256662","Email= asjhhhh@gmail.com","Qualification= Intermedaite","Job= Assistant Engineer", "Experience = 5 years"," Field= Electrical Engineer","Filed of intrest= Electrical Power Generation");
    // console.log(user.glsname);
    console.log(user.fullName);
  console.log("==========================================================")
  console.log("                             Biodata                      ")
  console.log("==========================================================")
    console.log(user.bio);