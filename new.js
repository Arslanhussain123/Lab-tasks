// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
//   class ABC{  
//     private double num = 100;
//     private int square(int a){
//      return a*a;
    
//     }
//  }  
//   let myCar1 = new Car("Ford", 2014);
// let Bike1 = new Bike("Honda", 2019);
// console.log(myCar1.name)
// console.log(Bike1.name)

function Person (age){
    this.age=age;
};
Person.prototype.growOlder= function(){
    this.age++;
};

// var v=new Person(42);
v.age=42;
v.growOlder();
console.log(v.age);
