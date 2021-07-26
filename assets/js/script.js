// The current date
var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDate);

/* Practice code for me to look back on. This method is necessary to recall.

var d = new Date();
var n = d.getHours();
console.log(n);
*/

// After getting the current hour we need to create a statement that allows us to compare timeNow variable with the present, past and future classes to give each log its color.

var timeNow = new Date().getHours();
console.log(timeNow);

const colorSlot = () => {
    
    if(timeNow === 9) {
    $("#nineam").addClass("present");
}
    else if(timeNow < 9) {
    $("#nineam").addClass("future");
}
    else if(timeNow > 9) {
    $("#nineam").addClass("past");
}
if(timeNow === 10) {
    $("#tenam").addClass("present");
}
    else if(timeNow < 10) {
    $("#tenam").addClass("future");
}
    else if(timeNow > 10) {
    $("#tenam").addClass("past");
}
if(timeNow === 11) {
    $("#elevenam").addClass("present");
}
    else if(timeNow < 11) {
    $("#elevenam").addClass("future");
}
    else if(timeNow > 11) {
    $("#elevenam").addClass("past");
}
if(timeNow === 12) {
    $("#twelvepm").addClass("present");
}
    else if(timeNow < 12) {
    $("#twelvepm").addClass("future")
}
    else if(timeNow > 12) {
    $("#twelvepm").addClass("past");
}
if(timeNow === 13) {
    $("#onepm").addClass("present");
}
    else if(timeNow < 13) {
    $("#onepm").addClass("future");
}
    else if(timeNow > 13) {
    $("#onepm").addClass("past");
}
if(timeNow === 14) {
    $("#twopm").addClass("present");
}
    else if(timeNow < 14) {
    $("#twopm").addClass("future");
}
    else if(timeNow > 14) {
    $("#twopm").addClass("past");
}
if(timeNow === 15) {
    $("#threepm").addClass("present");
}
    else if(timeNow < 15) {
    $("#threepm").addClass("future");
}
    else if(timeNow > 15) {
    $("#threepm").addClass("past");
}
if(timeNow === 16) {
    $("#fourpm").addClass("present");
}
    else if(timeNow < 16) {
    $("#fourpm").addClass("future");
}
    else if(timeNow > 16) {
    $("#fourpm").addClass("past");
}
if(timeNow === 17) {
    $("#fivepm").addClass("present");
}
    else if(timeNow < 17) {
    $("#fivepm").addClass("future");
}
    else if(timeNow > 17) {
    $("#fivepm").addClass("past");
}
};

// Loading in the function above everytime the screen is loaded so that the proper colors display

window.onload = colorSlot();

// creating an eventlistener that saves the user inputs everytime they click the save button after adding a task. Then we save it to local storage so that the user can refreesh the page and still keep there task.
    
$(".saveBtn").on("click", function(){
var task = $(this).siblings(".tasklog").val();
var taskLog = $(this).siblings(".hour").text();
localStorage.setItem(taskLog, task);
});



$("#nineam .tasklog").val(localStorage.getItem("9 AM"))
$("#tenam .tasklog").val(localStorage.getItem("10 AM"))
$("#elevenam .tasklog").val(localStorage.getItem("11 AM"))
$("#twelvepm .tasklog").val(localStorage.getItem("12 PM"))
$("#onepm .tasklog").val(localStorage.getItem("1 PM"))
$("#twopm .tasklog").val(localStorage.getItem("2 PM"))
$("#threepm .tasklog").val(localStorage.getItem("3 PM"))
$("#fourpm .tasklog").val(localStorage.getItem("4 PM"))
$("#fivepm .tasklog").val(localStorage.getItem("5 PM"))