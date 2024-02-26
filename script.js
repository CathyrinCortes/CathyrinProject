function updateDate(){
    var currentDate = new Date();
    var stringDate = currentDate.toDateString();
    var Timestring = currentDate.toLocaleTimeString();
    
    document.getElementById("datetime").innerHTML = "Current Date: " +stringDate+ "<br>Current Time: "+Timestring;
}

setInterval(updateDate, 500);

updateDate();