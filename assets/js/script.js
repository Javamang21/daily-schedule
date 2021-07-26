// The current date
var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDate);

/* Practice code for me to look back on. This method is necessary to recall.

var d = new Date();
var n = d.getHours();
console.log(n);
*/

// After getting the current hour we need to create a statement that allows us to compare timeNow variable with the present, past and future classes.

var timeNow = new Date().getHours();
console.log(timeNow);

const colorSlot = () => {
    
    if(timeNow === 9) {
    $("#nineam").addClass("present");
}
    else if(timeNow < 9) {
    $("#nineam").addClass("future")
}
    else if(timeNow > 9) {
    $("#nineam").addClass("past");
}
}

console.log(colorSlot);