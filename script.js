// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // .  DONE
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  // .  DONE
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
  // .  DONE
  // // // TODO: Add code to display the current date in the header of the page.
});


// this to show current day at header
var currentDay = $('#currentDay');
currentDay.text( dayjs().format('dddd, DD MMM YYYY'));



// for color coded, to control colors of i of hour-i comparing with current hour
var currentHour = dayjs().get('hour');
// console.log(currentHour);

$(document).ready(function() {
  for (var i = 9; i < 25; i++) {
    if ( currentHour < i ) {
      $("#hour-"+i).addClass('future');
    } else if ( currentHour === i ) {
      $("#hour-"+i).addClass('present');
    } else {
      $("#hour-"+i).addClass('past');
    }
  }
});


// saving user events in local storage
var saveBtn = $('.saveBtn');
saveBtn.on('click', function() {
  var scheduledEvent = $(this).parent().attr("id");
  var description = document.querySelector('#' + scheduledEvent + ' textarea').value;
  var hourEvent = window.localStorage.setItem(scheduledEvent, description);
  console.log( scheduledEvent + " : " + window.localStorage.getItem(scheduledEvent));
});

