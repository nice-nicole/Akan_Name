function printAkanName(){

    var arrayMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    var day =parseFloat(dd.value);
    var month=parseFloat(arrayMonth.indexOf(mm.value)+1);
    var year=parseFloat(yy.value);
    
    if((!day||day<=0|| day>31)||(!month||month<=0||month>12)||!year){
        alert("all fields are required, the date must be from 1 up to 31 and the month from January up to December!");
    }else{

        var century=(year-1)/100+1;

        var Dayoftheweek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
        var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 
        var nameOfDay=days[Dayoftheweek];

        
        var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afuaa","Ama"];
        var akanName;

        // document.getElementById('dayName').innerHTML= nameOfDay;
        if(gender.value==="Male"){
            akanName=maleNames[Dayoftheweek];
        }
        else if(gender.value==="Female"){
                akanName=femaleNames[Dayoftheweek];
        }
        else{
            alert("choose a gender");
        }
        document.getElementById('message').innerHTML= ("Your akan name is " + akanName);

    }
   
 
}