var hour = [9,10,11,12,13,14,15,16,17] //adding in military time to make it easy to reference
var displayHour = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"] // adding the hours Ill display


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

for (i=0; i<hour.length; i++) {
 var createDiv = $(`<div id="hour-${hour[i]}" class="row time-block" value=${hour[i]}>`);
  var currTextArea = $("<textarea>");
  $(".container").append(createDiv);
  var currTime = displayHour[i];
  createDiv.append($("<div class= 'col-md-1 hour'>").text(currTime))
  createDiv.append(createTextArea.attr("class", "col-md-10 description").attr("id", "memo-area"));
  createDiv.append($("<button class='col-md-1 saveBtn button'>").text("save"));
  if (moment( ).format("H") == hour[i]) {
   $("#hour-"+ hour[i]).addClass("present")
        } else if(moment().format("H")> hour[i]){
        $("#hour-"+ hour[i]).addClass("past")
        } else if(moment().format("H")< hour[i]){
        $("#hour-"+ hour[i]).addClass("future")
    }
   }
  
   $(".saveBtn").on("click", function(){
    var value= $(this).siblings(".description").val();
    var key= $(this).parent().attr("id");
    
    localStorage.setItem(key, value);
   })