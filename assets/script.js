//get id for output
var currentDay = document.getElementById("currentDay");
//assign html and content to id
currentDay.innerHTML = moment().toString();
//console.log(currentDay);
//Changes the class and display based on time
var checkTime= function(){
//get current time
var currentTime = moment().hours();
    console.log(currentTime);
//select each time block 
     $(".time-block").each(function(){
//get id for comparison        
        var timeBlock = $(this).attr("id");
//comparable and classe changes.
        if (timeBlock<currentTime){
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
checkTime()
