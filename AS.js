var info = [
    {all: "NAME : " , n:"Arslan" },
    {all: "FATHER NAME :" , n: "M.hussain"},
    {all: "CLASS SECTOIN : " , n:"Intermediate"},
    {all: "ROLL NO :", n:"51421"},
    {all: "ENROLL_No : " , n:"littlefolks/00123/2020"},
    ];
    var info = info.map(function(info){
    return console.log(info.all,info.n,);
    });
    console.log("\n",'------------------------------------------------------');
    console.log("==================== MARK SHEEET ===================");
    console.log('-------------------------------------------------------',"\n");
    console.log("SUBJECTS "," MARKS","\n");
    var Marksheet = [
    {Subject: 'Maths : ' , Marks: 85},
    {Subject: "Chemisrty : " , Marks: 75},
    {Subject: "Computer : " , Marks: 83},
    {Subject: "Biology : " , Marks: 83},
    {Subject: "Islamiat : " , Marks: 50},
    {Subject: "Urdu : " , Marks: 85},
    {Subject: "English : " , Marks: 78},
    {Subject: " Total marks : " , Marks: 539},
    ];
    sheet = Marksheet.map(function(Marksheet){
    return console.log(Marksheet.Subject,Marksheet.Marks);
   
    });
    var pps= 539/700*100;
    console.log("percentage",+pps);
    if (pps > 75) {
        console.log( "Your grade is A");
    }
