function printAkanName(){
    // var day =document.getElementById('dd').value;
    var arrayMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var day =parseFloat(dd.value);
    // for(var i=1;i<=arrayMonth.length;i++){
        // if(mm.value===arrayMonth[i]){
        //     // return i;
        // //     var mois= i;
        // // }
        var month=parseFloat(arrayMonth.indexOf(mm.value)+1);
    // }
    
    
    var year=parseFloat(yy.value);
    // var datesss=day+" "+month+" "+year;
    // var givMonth=datesss.getMonth();
    // document.getElementById('display').innerHTML= month;
    // document.getElementById('display').innerHTML= day+" "+mm.value+" "+year;
    var century=(year-1)/100+1;
    // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    // var dayOfTheWeek =Math.round( ( century/4 -2*century-1 + 5*year/4 + 26*(month+1)/10 + day )% 7);
   var Dayoftheweek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
   var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"] 
   var nameOfDay=days[Dayoftheweek];
   document.getElementById('display2').innerHTML=nameOfDay;
   var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
   var babyName;
   var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afuaa","Ama"];
    if(Dayoftheweek && gender.value==="Male"){
        babyName=maleNames[Dayoftheweek];
    }
    else{
        babyName=femaleNames[Dayoftheweek];
    }
        document.getElementById('display3').innerHTML=babyName;
        document.getElementById('display4').innerHTML=("Your new baby has born at "+day+" "+mm.value+" "+year+" on  "+nameOfDay+" . The baby is a "+gender.value+" and the baby name will be " +babyName+" :) :)");
}