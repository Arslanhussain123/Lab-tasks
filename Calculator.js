class Calculator{
    constructor(x,y){
    this.x=x;
    this.y=y;
     
}


get add(){
    // var sum = this.x + this.y;
   return console.log("sum: ",this.x); 

}
get sub (){
    return this.x - this.y
}

get mul (){
    return this.x * this.y
}

get div (){
    return this.x / this.y
}
get sqrt (){
    return Math.sqrt(this.x)
}
get Pow (){
    return Math.pow(this.x,this.y)
}

//   calculator(){
//       this.add;
//      this.sqrt;
//      this.Pow;
// }
   }


var user = new Calculator(7,3)
console.log("************* Calculator *****************")
console.log(" X= 7 and y = 3")
   console.log("Sum = ",user.add);
   console.log("subtraction =",user.sub);
   console.log("Multiplication = ",user.mul);
   console.log("Division",user.div);
   console.log("Square root of x =", user.sqrt);
   console.log("Power of x is y = ",user.Pow);