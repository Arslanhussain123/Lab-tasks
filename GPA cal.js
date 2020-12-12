var semester1 = [
    {info: "NAME : " , n:"Arif" },{info: "FATHER NAME :" , n: "afzal"},{info: "Semester : " , n:"1st , sec_A"},{info: "ROLL NO :", n:"13EL07"},{info: "University : " , n:"Mehran UET"},
    ];

var semester1 = semester1.map(function(semester1){
    return console.log(semester1.info,semester1.n);
    });
    console.log("\n",'------------------------------------------------------');
    console.log("###################### MARKSHEET ###########################");
    console.log('-------------------------------------------------------',"\n");
    console.log("SUBJECTS ",         " Quality points",          "Credit hours");
    var Marksheet = [
    {Subject: 'Calculus : ' , Quality_points: "12", Credit_hours: "3"},
    {Subject: "Fuctional English : " , Quality_points:"3" , Credit_hours: "2"},
    {Subject: "Applied physics : " , Quality_points: "9", Credit_hours: "3"},
    {Subject: "C++: " , Quality_points: "9", Credit_hours: "3"},
    {Subject: "Linear Cicuit Analysis", Quality_points: "12", Credit_hours: "3"},
    ];


    sheet = Marksheet.map(function(Marksheet){
    return console.log(Marksheet.Subject,       Marksheet.Quality_points,       Marksheet.Credit_hours);
    });
    var Calculus_Quality_points = 12;               var Calculus_Credit_hours=3;
    var English_Quality_points= 3;                  var Enghlish_Credit_hours= 2;
    var Physics_Quality_points= 9;                  var Physics_Credit_hours= 3;
    var C_pls_pls_Quality_points= 9;                var C_pls_pls_Credit_hours= 3;
    var Circuit_Analysis_Quality_points= 12;        var Circuit_Analysis_Credit_hours= 3;

let total_credit_hours= Calculus_Credit_hours+Enghlish_Credit_hours+Physics_Credit_hours+C_pls_pls_Credit_hours+Circuit_Analysis_Credit_hours;
let total_quality_point=Calculus_Quality_points+English_Quality_points+Physics_Quality_points+C_pls_pls_Quality_points+Circuit_Analysis_Quality_points;

let GPA= total_quality_point/total_credit_hours;


console.log("your GPA is",+ GPA);
    
    if (GPA > 3.5) {
        console.log( "Your grade is A");
            };
    if (GPA > 3) {
        console.log( "Your grade is B");
    };
    if (GPA == 2.5) {
        console.log( "Your grade is C");
    };