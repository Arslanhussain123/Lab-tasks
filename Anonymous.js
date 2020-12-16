var func= function(V,I,t,p_f){ return V*I*t*p_f};
function product(){
    var Energy;
    Energy =func(10,5,60,0.8);
    console.log("The product :"+Energy)
}
product();