function printAkanName(){

    var arrayMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    var day =parseFloat(dd.value);
    var month=parseFloat(arrayMonth.indexOf(mm.value)+1);
    var year=parseFloat(yy.value);
    
    if((day<=0|| day>31)||(month<=0||month>12)){
        document.getElementById('dayError').innerHTML=("The date must be between 1 and 31 and the month between January and December!");
    }else{

        var century=(year-1)/100+1;

        var Dayoftheweek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
        var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"] 
        var nameOfDay=days[Dayoftheweek];

        
        var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afuaa","Ama"];
        var babyName;
        if(Dayoftheweek && gender.value==="Male"){
            babyName=maleNames[Dayoftheweek];
        }
        else{
            babyName=femaleNames[Dayoftheweek];
            }
        document.getElementById('message').innerHTML=("Congratulations,Your new baby has born on  "+nameOfDay+", "+day+"th,"+mm.value+" "+year+". The baby is a "+gender.value+" and the baby name will be " +babyName+" :) :)"); 

        }
    
}